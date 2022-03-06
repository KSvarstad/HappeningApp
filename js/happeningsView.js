function updateViewHappenings(){
    document.getElementById('app').innerHTML = /*html*/ `
    ${createMenuHtml()}
    <div class="container">
        <div class="box1">
            <h3>Velg en trekning!</h3>
             ${getHappeningsHtml()}
            <h3>Velg personer som skal være med i trekningen!</h3>
            <input type="checkbox"
            onclick="selectAllOrNone(this.checked)"
            ${getChecked(model.data.selectAll)}/> Velg alle<br/>
            ${getUsers()}<br/>
            <button style="
                width: 200px; 
                height: 40px; 
                font-size: 20px;
                font-weight: bold;"
                onclick=drawUser()
                >Trekk!</button>
        </div>
        <div class="box2">
            <h3>Trekninger</h3>
            ${getDoneHappening()}
        </div>
    </div>
    `;
}

function getHappeningsHtml(){
    let html = '';
    const happenings = model.data.happenings;
    for (let i = 0; i < happenings.length; i++) {
        let happening = happenings[i];
        html += /*html*/`
        <input type="checkbox"
        onclick="toggleHappeningSelected(${happening.id})" 
        ${getChecked(happening.isSelected)}/>
        ${happening.name}<br/>    
        `;
    }
    return html;
}

function getUsers(){
    let html = '';
    const users = model.data.users;
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        html += /*html*/`
        <input type="checkbox" 
        onclick="togglePersonSelected(${user.id})" 
        ${getChecked(user.isSelected)}/> ${user.name} <br>
        `;
    }
    return html;
}

function createTextList(liste) {
    if (liste.length === 0) return '';
    if (liste.length === 1) return liste[0];

    const tekstListe = liste.join(', ');
    const indexSisteKomma = tekstListe.lastIndexOf(',');
    return tekstListe.substr(0, indexSisteKomma) +
        ' og ' + tekstListe.substr(indexSisteKomma + 1);
}

function getDoneHappening() {
    let html = '';
    const happenings = model.data.doneHappenings;
    for (let i = 0; i < happenings.length; i++) {
        const doneHappening = happenings[i];
        html += /*html*/`
        <h3>Trekning - <span style="color: #FF5733;">${doneHappening.name}</span></h3>
        <h3>Trukket person - <span style="color: #6AB334;">${doneHappening.userDrawn}</span></h3>
        <h3>Trukket fra disse personene med lavest verdi:<br> 
        <span style="color: #0075ff;">${createTextList(doneHappening.participants)}</span></h3>
        <h4>Trukket: ${doneHappening.time}</h4>
        <hr>
        `;
    }
    return html;
}