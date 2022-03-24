function updateViewHappeningEdit(){
    document.getElementById('app').innerHTML = /*html*/` 
    ${createMenuHtmlAdmin()}
    <div class="deleteAndEdit">
    <h4>Endre navn</h4>
    <br/>
    <input 
        type="text" 
        value="${model.inputs.editHappening.name}"
        oninput="model.inputs.editHappening.name=this.value"
    >
    <br/><br/>  
    <button 
    class="btn--top"
    onclick="editHappening()">Endre</button>
    </div>
`;
}
