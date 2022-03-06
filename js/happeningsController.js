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
    const happening = getHappeningById(id);
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


function drawUser(){
    let winners = model.data.doneHappenings
    let winner = {}
    winner.participants = getCheckedUsersNamesFromLowestPoint()
    let listOfUsers = getUsersWithLowestPoint()
    let drawnPerson = listOfUsers[Math.floor(Math.random()*listOfUsers.length)];
    drawnPerson.points += 2;
    let winnerId = drawnPerson.userId
    let winnerUser = getUserById(winnerId)
    winner.id = getCheckedHappeningId()
    winner.name = getCheckedHappeningName()
    winner.userDrawn = winnerUser.name
    winner.time = new Date
    winners.unshift(winner)
    updateViewHappenings()
    return winner
}

