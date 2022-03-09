function deleteHappening(id){
    if (! model.inputs.deleteHappening.areYouSure) return;
    const index = getHappeningIndexById(model.inputs.deleteHappening.id);
    model.data.happenings.splice(index, 1);
    model.data.userPoints = model.data.userPoints.filter
    (happeningid => happeningid.happeningId !== id)
    model.app.page='home';
    model.inputs.deleteHappening.areYouSure = false;
    updateView()
}
