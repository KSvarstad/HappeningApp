function resetHappenings(){
    if (! model.inputs.resetDoneHappenings.areYouSure) return;
    model.data.doneHappenings = []
    model.inputs.resetDoneHappenings.areYouSure = false;
    model.app.page = 'happening'
    updateView()
}