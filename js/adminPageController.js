function createNewUser() {
    model.app.page = 'admin';
    let user = {};
    user.id = getMaxUserId() + 1;
    user.name = model.inputs.newUser.name;
    user.isSelected = false;
    if (user.name !== '') {
        model.data.users.push(user);
        model.inputs.newUser.name = '';
        newHappeningPointsObj()
        updateAdminView()
    }
    selectAllOrNone(this.unchecked)
}


function createNewHappening() {
    model.app.page = 'admin'
    let happening = {};
    happening.id = getMaxHappeningId() + 1;
    happening.name = model.inputs.newHappening.name
    happening.isSelected = false
    if (happening.name !== '') {
        model.data.happenings.push(happening);
        model.inputs.newHappening.name = '';
        newUserPointsObj()
        updateAdminView()
    }
}

function newHappeningPointsObj() {
    const happenings = model.data.happenings
    const points = getLowestPointsFromEachHappening()
    const newObjsId = getMaxUserId()
    const newObjs = model.data.userPoints.points
    for (let i = 0; i < happenings.length;) {
            for (point of points) { 
            const userObj = {}
            userObj.userId = getMaxUserId()
            userObj.happeningId = happenings[i].id
            userObj.points = point 
            if(point === Infinity){
                userObj.points = 0
            }
            i++
            for (let j = 0; j < 1; j++) {
                model.data.userPoints.push(userObj);
            }
        }
    }
}

function newUserPointsObj() {
    let allUsers = model.data.users
    for (user of allUsers) {
        const pointsObj = {}
        pointsObj.userId = user.id
        pointsObj.happeningId = getMaxHappeningId()
        pointsObj.points = 0
        for (let j = 0; j < 1; j++) {
            model.data.userPoints.push(pointsObj);
        }
    }

}

function goToDeleteUserPage(userId) {
    model.app.page = 'deleteUser';
    model.inputs.deleteUser.id = userId;
    updateAdminView()
}

function goToDeleteHappeningPage(happeningId) {
    model.app.page = 'deleteHappening';
    model.inputs.deleteHappening.id = happeningId;
    updateAdminView()
}

function goToEditUserPage(userId) {
    model.app.page = 'editUser';
    model.inputs.editUser.userId = userId;
    const user = getUserById(userId);
    model.inputs.editUser.name = user.name;
    updateAdminView();
}

function goToEditHappeningPage(happeningId) {
    model.app.page = 'editHappening';
    model.inputs.editHappening.happeningId = happeningId;
    const happening = getHappeningById(happeningId);
    model.inputs.editHappening.name = happening.name;
    updateAdminView();
}

function sletteKommentar() {
    if (confirm('Sikker på at du vil slette kommentar?') == true) {
      updateView();
    } else {
      updateView();
    }
  }