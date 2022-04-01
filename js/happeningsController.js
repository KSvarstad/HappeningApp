function selectAllOrNone(selectAll) {
    model.data.selectAll = selectAll;
    for (let user of model.data.users) {
        user.isSelected = selectAll;
    }
    updateView();
}

function getChecked(isSelected) {
    return isSelected ? 'checked="checked"' : '';
}

function togglePersonSelected(id) {
    const user = getUserById(id);
    user.isSelected = !user.isSelected;
    updateView();
}

function toggleDetailsSelected(id) {
    const doneHappening = getDoneHappeningById(id);
    const allHappenings = model.data.doneHappenings
    doneHappening.detailsShown = !doneHappening.detailsShown;
    allHappenings.filter(obj => {
        if (obj.id !== id)
            obj.detailsShown = false
    })
    updateView()
}

function toggleHappeningSelected(id) {
    const happening = getHappeningById(id)
    happening.isSelected = !happening.isSelected;
    updateView();
}

function toggleDoAsapSelected() {
    const input = model.inputs
    input.doAsap = !input.doAsap;
    model.inputs.drawDate = null
    model.inputs.doWithinWeek = false
    model.inputs.doWithinTwoDays = false
    updateView();
}

function toggleDoWithinWeekSelected() {
    const input = model.inputs
    input.doWithinWeek = !input.doWithinWeek
    model.inputs.drawDate = null
    model.inputs.doAsap = false
    model.inputs.doWithinTwoDays = false
    updateView();
}

function toggleDoWithinTwoDaysSelected() {
    const input = model.inputs
    input.doWithinTwoDays = !input.doWithinTwoDays
    model.inputs.drawDate = null
    model.inputs.doAsap = false
    model.inputs.doWithinWeek = false
    updateView();
}


function getCheckedUsers() {
    let users = model.data.users;
    let checkedUsers = users.filter(user => {
        return user.isSelected === true
    })
    return checkedUsers;
}


function getCheckedUsersIds() {
    let userIds = []
    let users = getCheckedUsers()
    for (user of users) {
        userIds.push(user.id)
    }
    return userIds;
}

function getCheckedUsersNames() {
    let userNames = []
    let users = getCheckedUsers()
    for (user of users) {
        userNames.push(user.name)
    }
    return userNames;
}

function getCheckedHappeningName() {
    let happenings = model.data.happenings
    for (happening of happenings) {
        if (happening.isSelected === true)
            return happening.name
    }
}

function getCheckedHappeningId() {
    let happenings = model.data.happenings
    for (happening of happenings) {
        if (happening.isSelected === true)
            return happening.id
    }
}

function getAllHappeningIds() {
    let happenings = []
    let allHappenings = model.data.happenings
    for (let i = 0; i < allHappenings.length; i++) {
        happenings.push(allHappenings[i].id)
    }
    return happenings
}

function resetHappenings() {
    model.data.doneHappenings = []
    updateView()
}

function getCheckedHappenings() {
    let happening = model.data.happenings;
    let checkedhappenings = happening.filter(happening => {
        return happening.isSelected === true
    })
    return checkedhappenings;
}

function drawUser() {
    let drawCount = model.inputs.drawCount
    let checkedHappenings = getCheckedHappenings()
    let checkedHappeningName = getCheckedHappeningName()
    let checkedHappeningIds = getCheckedUsers()
    let doDate = model.inputs.drawDate
    let date = new Date(doDate)
    if (doDate === null || doDate === undefined || doDate === '') {
        date = null
    }
    if (model.inputs.doAsap === true) {
        date = 'Så fort som mulig'
    }
    if (model.inputs.doWithinWeek === true) {
        date = 'Innen en uke'
    }
    if (model.inputs.doWithinTwoDays === true) {
        date = 'Innen to dager'
    }
    if (checkedHappeningName === undefined) {
        alert('Velg arrangement!')
        return
    }
    if (checkedHappenings.length > 1) {
        alert('Du har huket av flere arrangementer!')
        return
    }
    if (checkedHappeningIds.length === 0) {
        alert('Velg personer å trekke mellom!')
        return
    }
    for (let i = 0; i < drawCount; i++) {
        let winners = model.data.doneHappenings
        let winner = {}
        let listOfUsers = getUsersWithLowestPoint()
        let drawnPerson = listOfUsers[Math.floor(Math.random() * listOfUsers.length)];
        drawnPerson.points += 2
        let winnerId = drawnPerson.userId
        let winnerUser = getUserById(winnerId)
        winner.participants = getCheckedUsersNamesFromLowestPoint()
        winner.comments = []
        winner.id = getMaxDoneHappeningId() + 1
        winner.userId = winnerId
        winner.doDate = date
        winner.happeningId = getCheckedHappeningId()
        winner.name = getCheckedHappeningName()
        winner.userDrawn = winnerUser.name
        winner.time = getNowForStorage()
        winner.detailsShown = false,
            winners.unshift(winner)
        model.app.page = 'happening'
        updateView()
    }
    model.inputs.drawDate = null
    model.inputs.doAsap = false
    model.inputs.doWithinDate = null
    model.inputs.doWithinTwoDays = false
    model.inputs.doWithinWeek = false
}

function addComment(id) {
    let happening = getDoneHappeningById(id)
    let comment = {}
    if(model.inputs.commentHappening.comment === '') return
    comment.commentTime = getNowForStorage()
    comment.commentId = getMaxCommentIdDoneHappening(id) + 1
    comment.comment = model.inputs.commentHappening.comment
    happening.comments.push(comment)
    model.inputs.commentHappening.comment = ''
    updateView()
}

function goToDeleteCommentPage(happeningId) {
    model.app.page = 'deleteComment';
    model.inputs.deleteComment.doneHappeningId = happeningId;
    updateView()
}


function check() {
    document.getElementById("cb1").checked = true;
}

function goToDetailsPage(happeningId) {
    model.app.page = 'details';
    document.getElementById("cb1").checked = true;
    updateDetailsView()
}

