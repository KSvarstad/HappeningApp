function deleteComment(commentId, happeningId){
    let happening = getDoneHappeningById(happeningId)
    let index = getCommentIndexById(commentId, happeningId)
    for (comment of happening.comments){
        if (comment.commentId === commentId)
        happening.comments.splice(index, 1)
    }
    updateView()
}

function deleteCommentAdmin(commentId, happeningId){
    let happening = getDoneHappeningById(happeningId)
    let index = getCommentIndexById(commentId, happeningId)
    for (comment of happening.comments){
        if (comment.commentId === commentId)
        happening.comments.splice(index, 1)
    }
    updateAdminView()
}