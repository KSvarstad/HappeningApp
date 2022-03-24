function updateViewUserEdit(){
    document.getElementById('app').innerHTML = /*html*/` 
    ${createMenuHtmlAdmin()}
    <div class="deleteAndEdit">
    <h4>Endre navn</h4>
    <input 
        type="text" 
        title="Endre navn på bruker"
        value="${model.inputs.editUser.name}"
        oninput="model.inputs.editUser.name=this.value"
        oninvalid="this.setCustomValidity('Feltet kan ikke være tomt')"
        required    
    >
    <br/>
    <h4>Endre poeng</h4>
    ${getAllHappeningsEditUser()}

    <br/>    
    <button class="btn--top" style="cursor: pointer;" onclick="editUser()">Endre</button>
    </div>
    
    
`;
}


function getAllHappeningsEditUser(){
    let html = '';
    const happenings = model.data.happenings;
    const userIds = model.data.userPoints;
    const id = model.inputs.editUser.userId;
    
    for (let i = 0; i < happenings.length; ) {
        for(let j = 0; j < userIds.length; j++) {
            if (userIds[j].userId === id) {
                
            const happening = happenings[i];
            const userId = userIds[j];
        html += /*html*/`
            <ul>
            <li>
                ${happening.name}
                    <input 
                    type="text"
                    title="Endre poeng til bruker"
                    value="${userId.points}"
                    oninput="model.inputs.editUser.points=parseInt(this.value)"
                    onchange="editPoints(${userId.userId}, ${happening.id})"
                    >
            </li>
            </ul> 
        `
        i++}
    }   
};
    return html;
}