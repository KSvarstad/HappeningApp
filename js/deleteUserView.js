function updateViewDeleteUser(){
    let id = model.inputs.deleteUser.id;
    document.getElementById('app').innerHTML = /*html*/`
        ${createMenuHtmlAdmin()}  
        <div class="deleteAndEdit">
        <h3> Slett </h3>
        ${createDeleteUserHtml()}
        <input
            type="checkbox"
            oninput="model.inputs.deleteUser.areYouSure = this.checked"
            ${model.inputs.deleteUser.areYouSure ? 'checked' : ''}
            /> Er du sikker på at du vil slette?<br><br/>
        <button class="btn--top" onclick="deleteUser(${id})"> Slett! </button>
        </div>
       `;
}

function createDeleteUserHtml(){
    const userId = model.inputs.deleteUser.id;
    const user = getUserById(userId);
    return /*html*/`
        Navn: ${user.name}<br>
    `;
}