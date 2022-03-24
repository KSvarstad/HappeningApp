function updateAdminViewHappenings() {
  document.getElementById('app').innerHTML = /*html*/ `
    ${createMenuHtmlAdmin()}
    ${adminGetDoneHappening()}     
    `;
}

function adminGetHappeningsHtml() {
  let html = '';
  let happenings = model.data.happenings;
  happenings.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
  for (let i = 0; i < happenings.length; i++) {
    let happening = happenings[i];
    html += /*html*/ `
        <input type="checkbox"
        onclick="adminGetDoneHappening()" />
        ${happening.name}<br/>    
        `;
  }
  return html;
}

function adminGetUsers() {
  let html = '';
  let users = model.data.users;
  users.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    html += /*html*/ `
        <input type="checkbox" 
        onclick="adminTogglePersonSelected(${user.id})" 
        ${adminGetChecked(user.isSelected)}/> ${user.name} <br>
        `;
  }
  return html;
}

function createTextList(liste) {
  if (liste.length === 0) return '';
  if (liste.length === 1) return liste[0];

  const tekstListe = liste.join(', ');
  const indexSisteKomma = tekstListe.lastIndexOf(',');
  return (
    tekstListe.substr(0, indexSisteKomma) +
    ' og ' +
    tekstListe.substr(indexSisteKomma + 1)
  );
}

function adminGetDoneHappening() {
  let html = '';
  let happenings = getDoneHappeningsCheckedHappening();
  let doneHappenings = model.data.doneHappenings;
  if (happenings.length === 0) {
    happenings = doneHappenings;
  }
  html += /*html*/ `
  <div  
  id="adminDoneHappenings" 
  class="adminDoneHappenings"
  onscroll="getScrollPoistionDoneHappeningsAdmin()">
  <h3>Trekninger</h3>
  `;
  for (let i = 0; i < happenings.length; i++) {
    let comments = happenings[i].comments
    let drawTime = model.data.doneHappenings;
    const dayNames = [
      'Søndag',
      'Mandag',
      'Tirsdag',
      'Onsdag',
      'Torsdag',
      'Fredag',
      'Lørdag',
    ];
    const time = new Date(drawTime[i].time);
    const dateText = getDateStringForDisplay(time);
    const dayName = dayNames[time.getDay()];
    const doneHappening = happenings[i];
    const date = doneHappening.doDate
    const doDate = new Date(date)
    // doDate.setDate(doDate.getDate()+7);
    let doDateText = getDateStringForDisplay(doDate)
    let doDateName = dayNames[doDate.getDay()]
    doDateText.substr(0, 10)
    if (date === null) {
      doDateName = 'Når som helst'
      doDateText = ''
    }
    if (date === '') {
      doDateName = 'Når som helst'
      doDateText = ''
    }
    html += /*html*/ `
        <h4>Trekning - <span style="color: #FF5733;">${doneHappening.name}</span>
        </h4> 
        <h4>Trukket person - <span style="color: #6AB334;">${doneHappening.userDrawn}</span></h3>
        <h4 id=>Utføres - 
        <span style="color: #0075ff">${doDateName} ${doDateText.substr(0,10)}</span></h4>
        <div>
        <h4>Trukket: ${dayName} ${dateText}</h4>
        <h3 class="participantList">Trukket blant disse personene - <br> 
        <span style="color: #0075ff;">${createTextList(doneHappening.participants)}</span></h3>
        <h4>Kommentarer - </h3>`
        for (let j = 0; j < comments.length; j++) {
          let comment = comments[j]
          const commentTime = new Date(comments[j].commentTime);
          const commentTimeText = getDateStringForDisplay(commentTime);
          const commentDayName = dayNames[time.getDay()];
          html += /*html*/`
                <span style="font-weight: 500;">- ${comment.comment} 
                <span style="font-weight: 400; font-size: 10px;">(${commentDayName} ${commentTimeText})</span></span><br />
              `;
        }

    html += /*html*/ `
        <br />
        <form>
        <input oninvalid="this.setCustomValidity('Feltet kan ikke være tomt')" 
        title="Skriv kommentar" 
        required type="text" 
        oninput="model.inputs.comment=this.value"/> 
        <button class="btn--top" onclick=addCommentAdmin(${doneHappening.id})>Legg til kommentar</button>
        <button class="btn--top" id="slette" onclick="goToDeleteCommentPageAdmin(${doneHappening.id})">Slett en kommentar</button>
        <button class="btn--top"onclick="deleteDoneHappening(${doneHappening.id})">Slett Trekning</button>
        </form>
        <hr>
        </div> 
        
        `;

  }
  html += /*html*/ `
  </div>
  `;
  return html;
}

function adminGetDoneHappeningsCheckedHappening() {
  let checkedDoneHappenings = [];
  let happenings = model.data.doneHappenings;
  let happeningObj = adminGetAllCheckedHappeningIds();
  for (x in happenings) {
    for (y in happeningObj) {
      if (happenings[x].happeningId === happeningObj[y]) {
        checkedDoneHappenings.push(happenings[x]);
      }
    }
  }
  return checkedDoneHappenings;
}

function adminGetAllCheckedHappeningIds() {
  let checkedHappenings = [];
  let happenings = model.data.happenings;
  for (happening of happenings) {
    if (happening.isSelected === true) checkedHappenings.push(happening.id);
  }
  return checkedHappenings;
}
