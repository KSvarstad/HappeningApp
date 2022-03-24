function editHappening() {
    const happening = getHappeningById(model.inputs.editHappening.happeningId);
    happening.name = model.inputs.editHappening.name;
    model.app.page = 'admin';
    updateAdminView();
}