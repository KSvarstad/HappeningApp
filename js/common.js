function createMenuHtml() {
    return /*html*/`
        <div class="topMenu">
        <button class="" onclick="model.app.page='home'; updateView()">Hjemmeside</button>
        <button class="" onclick="model.app.page='happening'; updateView()">Trekningsside</button>
        <button class="" onclick="model.app.page='resetHappenings'; updateView()">Tilbakestill trekninger</button>
        </div>

    `;
}

function getMaxUserId() {
    let id = 0;
    for (let user of model.data.users) {
        if (user.id > id) id = user.id;
    }
    return id;
}

function getAllUserIds() {
    let userIds = []
    let users = model.data.users
    for (user of users) {
        userIds.push(user.id)
    }
    return userIds;
}

function getMaxHappeningId() {
    let id = 0;
    for (let happening of model.data.happenings) {
        if (happening.id > id) id = happening.id;
    }
    return id;
}

function getHappeningById(id) {
    for (let happening of model.data.happenings) {
        if (happening.id === id) return happening;
    }
    return null;

}

function getHappeningIndexById(id) {
    for (let i = 0; i < model.data.happenings.length; i++) {
        let happening = model.data.happenings[i];
        if (happening.id === id) return i;
    }
    return null;
}

function getUserById(id) {
    for (let user of model.data.users) {
        if (user.id === id) return user;
    }
    return null;
}

function getUserIndexById(id) {
    for (let i = 0; i < model.data.users.length; i++) {
        let user = model.data.users[i];
        if (user.id === id) return i;
    }
    return null;
}


function getLowestPoint() {
    let users = getCheckedUsersPointsInCheckedHappening()
    return Math.min(...users.map(item => item));
}

function getUserPoints(userId, happeningId) {
    let points = model.data.userPoints;
    for (point of points) {
        if (point.userId === userId && point.happeningId === happeningId) {
            return point.points;
        }
    }
}

function getUserByPoint(points, happeningId) {
    let users = model.data.userPoints;
    for (user of users) {
        if (user.points === points && user.happeningId === happeningId) {
            return user.userId;
        }
    }
}

function getUsersWithLowestPoint() {
    let checkedUsers = getCheckedUsersInCheckedHappening()
    let lowestPoint = getLowestPoint()
    let users = checkedUsers
    return users.filter(obj => { return obj.points === lowestPoint })
}


function getCheckedUsersInCheckedHappening() {
    let checkedUsersInHappening = []
    let happenings = getHappeningObj()
    let usersId = getCheckedUsersIds()
    for (x in happenings) {
        for (y in usersId) {
            if (happenings[x].userId === usersId[y]) {
                checkedUsersInHappening.push(happenings[x]);
            }
        }
    }
    return checkedUsersInHappening
}

function getCheckedUsersNamesFromLowestPoint() {
    let usersWithLowestScore = []
    let users = getCheckedUsers()
    let usersId = getUsersWithLowestPoint()
    for (x in users) {
        for (y in usersId) {
            if (users[x].id === usersId[y].userId) {
                usersWithLowestScore.push(users[x].name);
            }
        }
    }
    return usersWithLowestScore
}

function getCheckedUsersPointsInCheckedHappening() {
    let checkedUsersInHappening = []
    let happenings = getHappeningObj()
    let usersId = getCheckedUsersIds()
    for (x in happenings) {
        for (y in usersId) {
            if (happenings[x].userId === usersId[y]) {
                checkedUsersInHappening.push(happenings[x].points);
            }
        }
    }
    return checkedUsersInHappening
}

function getHappeningUserIds() {
    let checkedHappening = getCheckedHappeningId()
    let happeningUsersList = []
    let allPoints = model.data.userPoints;
    for (obj of allPoints) {
        if (obj.happeningId === checkedHappening) {
            happeningUsersList.push(obj.userId)
        }
    }
    return happeningUsersList
}

function getHappeningObj() {
    let checkedHappening = getCheckedHappeningId()
    let happeningObjList = []
    let allPoints = model.data.userPoints;
    for (obj of allPoints) {
        if (obj.happeningId === checkedHappening) {
            happeningObjList.push(obj)
        }
    }
    return happeningObjList
}

function getHappeningPoints() {
    let checkedHappening = getCheckedHappeningId()
    let happeningPoints = []
    let allPoints = model.data.userPoints;
    for (points of allPoints) {
        if (points.happeningId === checkedHappening) {
            happeningPoints.push(points.points)
        }
    }
    return happeningPoints
}

function getUsersWithLowestPoint() {
    let checkedUsers = getCheckedUsersInCheckedHappening()
    let lowestPoint = getLowestPoint()
    let users = checkedUsers
    return users.filter(obj => { return obj.points === lowestPoint })
}

function getAllHappenings() {
    const happenings = model.data.happenings;
    for (let i = 0; i < happenings.length; i++) {
        const happening = happenings[i];
    }
    return happenings;
}

function createUserPointsObj(){
    let userPoints = model.data.userPoints
    let happeningIds = getAllHappeningIds()
    let userObject = {}
    userObject.userId = getMaxUserId()
    userObject.happeningId = getMaxHappeningId()
    userObject.points = ''
    userPoints.push(userObject)
}