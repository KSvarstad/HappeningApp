function updateViewHappeningEdit(){
    document.getElementById('app').innerHTML = /*html*/` 
    ${createMenuHtml()}
    <div class="deleteAndEdit">
    <p>Endre navn på arrangement <strong>${model.inputs.editHappening.name}</strong> 
    <br/><br/>
    <input 
        type="text" 
        value="${model.inputs.editHappening.name}"
        oninput="model.inputs.editHappening.name=this.value"
    >
    <br/><br/>  
    <button 
    onclick="editHappening()">Endre</button>
    </div>
`;
}
