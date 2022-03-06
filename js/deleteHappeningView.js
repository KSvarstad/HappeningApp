function updateViewDeleteHappening(){
    document.getElementById('app').innerHTML = /*html*/`
        ${createMenuHtml()}  
        <h2> Slett </h2>
        ${createDeleteHappeningHtml()}
        <input
            type="checkbox"
            oninput="model.inputs.deleteHappening.areYouSure = this.checked"
            ${model.inputs.deleteHappening.areYouSure ? 'checked' : ''}
            /> Er du sikker på at du vil slette?<br>
        <button onclick="deleteHappening()"> Slett! </button>
       `;
}

function createDeleteHappeningHtml(){
    const happeningId = model.inputs.deleteHappening.id;
    const happening = getHappeningById(happeningId);
    return /*html*/`
        Navn: ${happening.name}<br>
    `;
}