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

function toggleHappeningSelected(id) {
    const happening = getHappeningById(id)
    happening.isSelected = !happening.isSelected;
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

function getAllHappeningIds(){
    let happenings = []
    let allHappenings = model.data.happenings
    for (let i = 0; i < allHappenings.length; i++) {
        happenings.push(allHappenings[i].id)
    }
    return happenings
}

function resetHappenings(){
    model.data.doneHappenings = []
    updateView()
}

function deleteDoneHappening(id){
    const doneHappenings = model.data.doneHappenings
    let userId = null
    let happeningId = null
    for(happening of doneHappenings){
        if(happening.id === id)
        userId = happening.userId
    }
    for(happening of doneHappenings){
        if(happening.id === id)
        happeningId = happening.happeningId
    }
    let userDrawn = getUserObjPoints(userId, happeningId)
    userDrawn.points = userDrawn.points - 2
    const index = getDoneHappeningIndexById(id);
    model.data.doneHappenings.splice(index, 1);
    model.app.page='happening';
    updateView()
}

function getCheckedHappenings() {
    let happening = model.data.happenings;
    let checkedhappenings = happening.filter(happening => {
        return happening.isSelected === true
    })
    return checkedhappenings;
}

function drawUser(){
    let checkedHappenings = getCheckedHappenings()
    let checkedHappeningName = getCheckedHappeningName()
    let checkedHappeningIds = getCheckedUsers()
    if(checkedHappeningName === undefined){
        alert('Velg arrangement!')
        return
    }
    if(checkedHappenings.length > 1){
        alert('Du har huket av flere arrangementer!')
        return
    }
    if(checkedHappeningIds.length === 0){
        alert('Velg personer å trekke mellom!')
        return
    }
    let winners = model.data.doneHappenings
    let winner = {}
    winner.participants = getCheckedUsersNamesFromLowestPoint()
    let listOfUsers = getUsersWithLowestPoint()
    let drawnPerson = listOfUsers[Math.floor(Math.random()*listOfUsers.length)];
    drawnPerson.points += 2
    let winnerId = drawnPerson.userId
    let winnerUser = getUserById(winnerId)
    winner.id = getMaxDoneHappeningId() + 1
    winner.userId = winnerId
    winner.happeningId = getCheckedHappeningId()
    winner.name = getCheckedHappeningName()
    winner.userDrawn = winnerUser.name
    winner.time = getNowForStorage()
    winners.unshift(winner)
    model.app.page = 'happening'
    updateViewHappenings()
    return winner
}

