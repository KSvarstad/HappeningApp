function updateViewHome(){
    document.getElementById('app').innerHTML = /*html*/`
    ${createMenuHtml()}
    <div class="container">
        <div class="box1">
            <h3>Arrangementer</h3>
            ${getAllHappeningsHome()}
            <input oninput="model.inputs.newHappening.name = this.value" type="text">
            <button onclick="createNewHappening()">Legg til nytt arrangement</button>
        </div>
        <div class="box2">
            <h3>Personer</h3>
            ${getusersHome()}
            <input oninput="model.inputs.newUser.name = this.value" type="text">
            <button onclick="createNewUser()">Legg til ny person</button>
        </div>
    </div>
    `; 
}


function getusersHome(){
    let html = '';
    const users = model.data.users;
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        html += /*html*/`
            <ul>
            <li>${user.name} 
            <button onclick="goToEditUserPage(${user.id})">Endre</button> 
            <button onclick="goToDeleteUserPage(${user.id})">Slett</button><br></li>
            </ul>
        `;
    }
    return html;
}

function getAllHappeningsHome(){
    let html = '';
    const happenings = model.data.happenings;
    for (let i = 0; i < happenings.length; i++) {
        const happening = happenings[i];
        html += /*html*/`
            <ul>
            <li>${happening.name} <button onclick="goToEditHappeningPage(${happening.id})">Endre</button> 
            <button onclick="goToDeleteHappeningPage(${happening.id})">Slett</button></li>
            </ul>      
        `;
    }
    return html;
}