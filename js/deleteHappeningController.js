function deleteHappening(){
    if (! model.inputs.deleteHappening.areYouSure) return;
    const index = getHappeningIndexById(model.inputs.deleteHappening.id);
    model.data.happenings.splice(index, 1);
    model.app.page='home';
    model.inputs.deleteHappening.areYouSure = false;
    updateView()
}