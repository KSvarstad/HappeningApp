function deleteUser(){
    if (! model.inputs.deleteUser.areYouSure) return;
    const index = getUserIndexById(model.inputs.deleteUser.id);
    model.data.users.splice(index, 1);
    model.app.page='home';
    model.inputs.deleteUser.areYouSure = false;
    updateView()
}