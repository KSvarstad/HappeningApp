function editUser() {
    const user = getUserById(model.inputs.editUser.userId);
    const name = model.inputs.editUser.name;
    if(name == ''){alert('Bruker trenger et navn!')}else{
    user.name = name;
    model.app.page = 'admin';
    updateAdminView();
}
}

function editPoints(userId, happeningId) {
    const obj = editPointsObj(userId, happeningId)
    obj.points = model.inputs.editUser.points;
    // alert("Du har endret poeng!")   
}

function editPointsObj(userId, happeningId) {
    let users = model.data.userPoints;
    for (user of users) {
        if (user.userId === userId && user.happeningId === happeningId) {
            return user;
        }
    }
}