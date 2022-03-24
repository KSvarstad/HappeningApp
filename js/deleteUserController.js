function deleteUser(id){
    if (! model.inputs.deleteUser.areYouSure) return;
    const index = getUserIndexById(model.inputs.deleteUser.id);
    model.data.users.splice(index, 1);
    model.app.page='admin';
    model.inputs.deleteUser.areYouSure = false;
    model.data.userPoints = model.data.userPoints.filter(userId => userId.userId !== id)
    model.data.userPoints = model.data.userPoints.filter(userId => userId.happeningId !== id)
    model.data.doneHappenings = model.data.doneHappenings.filter(happeningid => happeningid.happeningId !== id)
    updateAdminView()
}