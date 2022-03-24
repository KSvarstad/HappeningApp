

function adminGetAllHappeningIds(){
    let happenings = []
    let allHappenings = model.data.happenings
    for (let i = 0; i < allHappenings.length; i++) {
        happenings.push(allHappenings[i].id)
    }
    return happenings
}



function deleteDoneHappening(id){
    if (confirm("Er du sikker?") == true){
    const doneHappenings = model.data.doneHappenings
    let userId = null
    let happeningId = null
    for(happening of doneHappenings){
        if(happening.id === id)
        userId = happening.userId
    }
    for(happening of doneHappenings){
        if(happening.id === id)
        happeningId = happening.happeningId
    }
    let userDrawn = getUserObjPoints(userId, happeningId)
    userDrawn.points = userDrawn.points - 2
    const index = getDoneHappeningIndexById(id);
    model.data.doneHappenings.splice(index, 1);
    model.app.page='happeningsAdmin';
    updateAdminView()
    }else{
    updateAdminView()
    }
}

function adminGetCheckedHappenings() {
    let happening = model.data.happenings;
    let checkedhappenings = happening.filter(happening => {
        return happening.isSelected === true
    })
    return checkedhappenings;
}

function addCommentAdmin(id){
    let happening = getDoneHappeningById(id)
    if (model.inputs.comment === '') {
        return
    }
    else {
        let comment = {}
        comment.commentTime = getNowForStorage()
        comment.commentId = getMaxCommentIdDoneHappening(id) + 1
        comment.comment = model.inputs.comment
        happening.comments.push(comment)
        model.inputs.comment = ''
        updateAdminView()
    }
}

function goToDeleteCommentPageAdmin(happeningId) {
    model.app.page = 'deleteCommentAdmin';
    model.inputs.deleteComment.doneHappeningId = happeningId;
    updateAdminView()
}


// function resetHappenings(){
//     model.data.doneHappenings = []
//     updateAdminView()
// }

// function adminGetCheckedUsers() {
//     let users = model.data.users;
//     let checkedUsers = users.filter(user => {
//         return user.isSelected === true
//     })
//     return checkedUsers;
// }


// function adminGetCheckedUsersIds() {
//     let userIds = []
//     let users = getCheckedUsers()
//     for (user of users) {
//         userIds.push(user.id)
//     }
//         return userIds;
// }

// function adminGetCheckedUsersNames() {
//     let userNames = []
//     let users = getCheckedUsers()
//     for (user of users) {
//         userNames.push(user.name)
//     }
//         return userNames;
// }

// function adminDrawUser(){
//     let checkedHappenings = adminGetCheckedHappenings()
//     let checkedHappeningName = adminGetCheckedHappeningName()
//     let checkedHappeningIds = adminGetCheckedUsers()
//     if(checkedHappeningName === undefined){
//         alert('Velg arrangement!')
//         return
//     }
//     if(checkedHappenings.length > 1){
//         alert('Du har huket av flere arrangementer!')
//         return
//     }
//     if(checkedHappeningIds.length === 0){
//         alert('Velg personer å trekke mellom!')
//         return
//     }
//     let winners = model.data.doneHappenings
//     let winner = {}
//     winner.participants = getCheckedUsersNamesFromLowestPoint()
//     let listOfUsers = getUsersWithLowestPoint()
//     let drawnPerson = listOfUsers[Math.floor(Math.random()*listOfUsers.length)];
//     drawnPerson.points += 2
//     let winnerId = drawnPerson.userId
//     let winnerUser = getUserById(winnerId)
//     winner.id = getMaxDoneHappeningId() + 1
//     winner.userId = winnerId
//     winner.happeningId = getCheckedHappeningId()
//     winner.name = getCheckedHappeningName()
//     winner.userDrawn = winnerUser.name
//     winner.time = getNowForStorage()
//     winner.comment = ''
//     winners.unshift(winner)
//     model.app.page = 'happeningsAdmin'
//     updateAdminViewHappenings()
//     return winner
// }

// function addCommentAdmin(id) {
//     if (model.inputs.comment === '') {
//         return
//     }
//     else {
//         let happening = getDoneHappeningById(id)
//         happening.comment += model.inputs.comment;
//         model.inputs.comment = ''
//         updateAdminView()
//     }

// }

// bookmark

//   function goToDetailsPage(happeningId) {
//         model.app.page = 'details';
//         model.data.doneHappenings.id = doneId;
//         updateAdminView()
//     }

