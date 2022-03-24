function updateViewDeleteHappening(){
    let id = model.inputs.deleteHappening.id;
    document.getElementById('app').innerHTML = /*html*/`
        ${createMenuHtmlAdmin()}  
        <div class="deleteAndEdit">
        <h3> Slett </h3>
        ${createDeleteHappeningHtml()}
        <input
            type="checkbox"
            oninput="model.inputs.deleteHappening.areYouSure = this.checked"
            ${model.inputs.deleteHappening.areYouSure ? 'checked' : ''}
            /> Er du sikker på at du vil slette?<br><br />
        <button class="btn--top"  onclick="deleteHappening(${id})"> Slett! </button>
        </div>
       `;
}

function createDeleteHappeningHtml(){
    const happeningId = model.inputs.deleteHappening.id;
    const happening = getHappeningById(happeningId);
    return /*html*/`
        Navn: ${happening.name}<br>
    `;
}