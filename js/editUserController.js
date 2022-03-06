function editUser() {
    const user = getUserById(model.inputs.editUser.userId);
    user.name = model.inputs.editUser.name;
    model.app.page = 'home';
    updateView();
}