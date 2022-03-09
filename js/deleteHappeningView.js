function updateViewDeleteHappening(){
    document.getElementById('app').innerHTML = /*html*/`
        ${createMenuHtml()}  
        <div class="deleteAndEdit">
        <h3> Slett </h3>
        ${createDeleteHappeningHtml()}
        <input
            type="checkbox"
            oninput="model.inputs.deleteHappening.areYouSure = this.checked"
            ${model.inputs.deleteHappening.areYouSure ? 'checked' : ''}
            /> Er du sikker på at du vil slette?<br><br />
        <button onclick="deleteHappening()"> Slett! </button>
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