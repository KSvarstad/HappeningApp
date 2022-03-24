function deleteCommentView() {
    let id = model.inputs.deleteUser.id;
    document.getElementById('app').innerHTML = /*html*/`
        ${createMenuDeleteCommentHtml()}  
        <div class="deleteComments">
        <h3> Slett kommentar</h3>
        ${createDeleteCommentHtml()}
        </div>
       `;
}

function deleteCommentViewAdmin() {
    let id = model.inputs.deleteUser.id;
    document.getElementById('app').innerHTML = /*html*/`
        ${createMenuDeleteCommentHtmlAdmin()}  
        <div class="deleteComments">
        <h3> Slett kommentar</h3>
        ${createDeleteCommentHtmlAdmin()}
        </div>
       `;
}

function createDeleteCommentHtml() {
    let html = ''
    const happeningId = model.inputs.deleteComment.doneHappeningId;
    let comments = getAllCommentsFromDoneHappening(happeningId);
    for (let i = 0; i < comments.length; i++) {
        let comment = comments[i]
        const dayNames = [
            'Søndag',
            'Mandag',
            'Tirsdag',
            'Onsdag',
            'Torsdag',
            'Fredag',
            'Lørdag',
          ];
        const commentTime = new Date(comments[i].commentTime);
        const commentTimeText = getDateStringForDisplay(commentTime);
        const commentDayName = dayNames[commentTime.getDay()];
        html +=/*html*/`
        ${comment.comment} 
        <span style="font-weight: 400; font-size: 10px;">(${commentDayName} ${commentTimeText})</span>
        <button class="btn--top" onclick="deleteComment(${comment.commentId}, ${happeningId})">Slett</button> <br /><br />
        `;
    }
    return html
}

function createDeleteCommentHtmlAdmin() {
    let html = ''
    const happeningId = model.inputs.deleteComment.doneHappeningId;
    let comments = getAllCommentsFromDoneHappening(happeningId);
    for (let i = 0; i < comments.length; i++) {
        let comment = comments[i]
        const dayNames = [
            'Søndag',
            'Mandag',
            'Tirsdag',
            'Onsdag',
            'Torsdag',
            'Fredag',
            'Lørdag',
          ];
        const commentTime = new Date(comments[i].commentTime);
        const commentTimeText = getDateStringForDisplay(commentTime);
        const commentDayName = dayNames[commentTime.getDay()];
        html +=/*html*/`
        ${comment.comment} 
        <span style="font-weight: 400; font-size: 10px;">(${commentDayName} ${commentTimeText})</span>
        <button class="btn--top" onclick="deleteCommentAdmin(${comment.commentId}, ${happeningId})">Slett</button> <br /><br />
        `;
    }
    return html
}

function createMenuDeleteCommentHtmlAdmin() {
    return /*html*/ `
          <div class="topMenu">
          <button class="btn--top" onclick="model.app.page='happeningsAdmin'; updateAdminView()">Tilbake</button>
          </div>
      `;
  }
  
  function createMenuDeleteCommentHtml() {
    return /*html*/ `
          <div class="topMenu">
          <button class="btn--top" onclick="model.app.page='login'; updateView()">Admin</button>
          <button class="btn--top" onclick="model.app.page='happening'; updateView()">Tilbake</button>
          </div>
      `;
  }
  