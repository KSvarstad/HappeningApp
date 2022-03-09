function updateViewHappenings() {
    document.getElementById('app').innerHTML = /*html*/ `
    ${createMenuHtml()}
    <div class="container">
        <div class="boxOne">
            <div class="happeningAndUsers">
                <h3>Velg <span style="color: #FF5733">en</span> trekning!</h3>
                ${getHappeningsHtml()}
                <h3>Velg personer som skal være med i trekningen!</h3>
                <input type="checkbox"
                onclick="selectAllOrNone(this.checked)"
                ${getChecked(model.data.selectAll)}/> <span style="color: #0075ff; font-weight: 600;">Velg alle</span><br/>
                ${getUsers()}<br/>
            </div>
                <button style="
                width: 200px; 
                height: 40px; 
                font-size: 20px;
                font-weight: bold;"
                onclick=drawUser()
                >Trekk!</button>
        </div>
        <div class="boxTwo">
        <h3>Trekninger</h3>
            ${getDoneHappening()}
        </div>
    </div>
    `;
}



function getHappeningsHtml() {
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

function getUsers() {
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
    const happenings = getDoneHappeningsCheckedHappening()
    const doneHappenings = model.data.doneHappenings
    for (let i = 0; i < happenings.length; i++) {
        let drawTime = model.data.doneHappenings
        const dayNames = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
        const time = new Date(drawTime[i].time);
        const dateText = getDateStringForDisplay(time);
        const dayName = dayNames[time.getDay()];
        const doneHappening = happenings[i];
        html += /*html*/`
        <h3>Trekning - <span style="color: #FF5733;">${doneHappening.name}</span></h3>
        <h3>Trukket person - <span style="color: #6AB334;">${doneHappening.userDrawn}</span></h3>
        <h3>Trukket fra disse personene med færrest poeng:<br> 
        <span style="color: #0075ff;">${createTextList(doneHappening.participants)}</span></h3>
        <h4>Trukket: ${dayName} ${dateText}</h4>
        <button onclick="deleteDoneHappening(${doneHappening.id})">Slett</button>
        <hr>
        `;
    }
    return html;
}

function getDoneHappeningsCheckedHappening() {
    let checkedDoneHappenings = []
    let happenings = model.data.doneHappenings
    let happeningObj = getAllCheckedHappeningIds()
    for (x in happenings) {
        for (y in happeningObj) {
            if (happenings[x].happeningId === happeningObj[y]) {
                checkedDoneHappenings.push(happenings[x]);
            }
        }
    }
    return checkedDoneHappenings
}

function getAllCheckedHappeningIds() {
    let checkedHappenings = []
    let happenings = model.data.happenings
    for (happening of happenings) {
        if (happening.isSelected === true)
        checkedHappenings.push(happening.id)
    }
    return checkedHappenings
}