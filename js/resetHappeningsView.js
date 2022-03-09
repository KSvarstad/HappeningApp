function resetHappeningsView() {
    document.getElementById('app').innerHTML = /*html*/`
            ${createMenuHtml()}  
            <div class="deleteAndEdit">
            <h3>Tilbakestill trekninger</h3>
            <input
                type="checkbox"
                oninput="model.inputs.resetDoneHappenings.areYouSure = this.checked"
                ${model.inputs.resetDoneHappenings.areYouSure ? 'checked' : ''}
                /> Er du sikker på at du vil tilbakestille?<br><br/>
                <button onclick="resetHappenings()">Tilbakestill! </button>
            </div>
           `;
}
