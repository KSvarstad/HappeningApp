





function deleteHappening(id){
    if (! model.inputs.deleteHappening.areYouSure) return;
    const index = getHappeningIndexById(model.inputs.deleteHappening.id);
    model.data.happenings.splice(index, 1);
    model.app.page='admin';
    model.inputs.deleteHappening.areYouSure = false;
    model.data.userPoints = model.data.userPoints.filter(happeningid => happeningid.happeningId !== id)
    model.data.doneHappenings = model.data.doneHappenings.filter(happeningid => happeningid.happeningId !== id)
    updateAdminView()
}


// function deleteFilter(){
//     model.data.userPoints = model.data.userPoints.filter(happeningid => happeningid.happeningId !== 2)
// }


function getIndexOfUserPoints(happeningId) {
    let userPoints = model.data.userPoints
    let indexes = [];
    for (let i = 0; i < userPoints.length; i++) {
        if(userPoints[i].happeningId === happeningId){
        indexes.push(i);
        }
    }
    return indexes;
  }
