function updateViewHappenings() {
  document.getElementById('app').innerHTML = /*html*/ `
  <div class="container">
    ${happenMenuHtml()}
      
      <div class="happeningsColumn">
      <h2 class="headerHappenings">Velg <span style="color: #FF5733">en</span> trekning! 
      </h2>
            <div class="happeningList">
            ${getHappeningsHtml()}
            </div>
      </div>


      <div  id="doneHappeningsColumn" 
            class="doneHappeningsColumn" 
            onscroll="getScrollPoistionDoneHappenings()">
        <h2 class="headerDoneHappenings">Trekninger</h2>
           <div class="doneHappenList">
            ${getDoneHappening()}
            </div>
      </div>

      <div  id="userColumn" 
            class="userColumn" 
            onscroll="getScrollPoistionUsers()">
            <h2 class="headerUsers">Velg personer som skal være med i trekningen!</h2>
            <div class="userList">
            <input type="checkbox"
            onclick="selectAllOrNone(this.checked)"
            ${getChecked(
    model.data.selectAll
  )}/> <span style="color: #0075ff; font-weight: 600;">Velg alle</span><br/>
            ${getUsers()}<br/>
            </div>
      </div>
  </div>

    `;
}

function getHappeningsHtml() {
  let html = '';
  let happenings = model.data.happenings;
  happenings.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
  for (let i = 0; i < happenings.length; i++) {
    let happening = happenings[i];
    html += /*html*/ `
      <div class="checkboxWrap">
        <input type="checkbox" class="HappeningCheckbox"
        onclick="toggleHappeningSelected(${happening.id})" 
        ${getChecked(happening.isSelected)}/>
        ${happening.name}<br/>    
        </div>
        `;
  }
  return html;
}

function getUsers() {
  let html = '';
  let users = model.data.users;
  users.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    html += /*html*/ `
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
  return (
    tekstListe.substr(0, indexSisteKomma) +
    ' og ' +
    tekstListe.substr(indexSisteKomma + 1)
  );
}

function getDoneHappening() {
  let html = '';
  let happenings = getDoneHappeningsCheckedHappening();
  let doneHappenings = model.data.doneHappenings;
  if (happenings.length === 0) {
    happenings = doneHappenings;
  }
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
    html += /*html*/ `
        <h3>Trekning - <span style="color: #FF5733;">${doneHappening.name
      }</span>
        </h3> 
       
        <h4>Trukket person - <span style="color: #6AB334;">${doneHappening.userDrawn
      }</span></h4>
      `;
      if (date !== null && date !== '') {
        html += /*html*/ `
        <h4 id=>Utføres - 
        <span style="color: #0075ff">${doDateName} ${doDateText.substr(0, 9)}</span></h4>
        `;
        }
        
        if (doneHappening.detailsShown === true) {
          html += /*html*/`
          <div>
          <h4>Kommentarer - </h4>`
          for (let j = 0; j < comments.length; j++) {
            const commentTime = new Date(comments[j].commentTime);
            const commentTimeText = getDateStringForDisplay(commentTime);
            const commentDayName = dayNames[commentTime.getDay()];
            let comment = comments[j]
            html += /*html*/`
            <span style="font-weight: 500;">- ${comment.comment} 
            <span style="font-weight: 400; font-size: 10px;">(${commentDayName} ${commentTimeText})</span></span><br />
            `;
          }
          
          html += /*html*/ `
          <br/>
          <form>
          <input oninvalid="this.setCustomValidity('Feltet kan ikke være tomt')" 
          title="Skriv kommentar" 
          required type="text" 
          oninput="model.inputs.comment=this.value"/> 
          
        <button class="btn--top" onclick=addComment(${doneHappening.id
        })>Legg til kommentar</button>
        <button class="btn--top" id="slette" onclick="goToDeleteCommentPage(${doneHappening.id
        })">Slett en kommentar</button>
        </form>
        <h4>Trukket - ${dayName} ${dateText}</h4>
        </div> 
        `;
      } 
      // else { 
      //   html += /*html*/`
      //   `; }
        html += /*html*/`<button class="btn--top"
        title="Detaljer" id="detailsSwich" 
        onclick="toggleDetailsSelected(${doneHappening.id})"
        ${getChecked(doneHappening.detailsShown)}>Detaljer</button>
        <hr>
        `;
  }
  return html;
}

function showDetails(id) {
  let details = document.getElementById('details--' + id);
  if (details.style.display === 'none') {
    details.style.display = 'block';
  } else {
    details.style.display = 'none';
  }
}

function changeText() {
  var btn = document.getElementById("detailsSwich");

  if (btn.value == "Vis detaljer") {
    btn.value = "Skjul detaljer";
    btn.innerHTML = "Skjul detaljer";
  }
  else {
    btn.value = "Vis detaljer";
    btn.innerHTML = "Vis detaljer";
  }

}

function happenMenuHtml() {
  return /*html*/ `
          <div class="topMenu">
          <button class="btn--top" onclick="model.app.page='login'; updateView()">Admin</button>
          Antall trekninger -
          <input 
          style="margin-right: 0.5rem; width: 45px;"
          type="number"
          size="1" 
          value="${model.inputs.drawCount}" 
          onchange="model.inputs.drawCount=parseInt(this.value)"
          />
          Skal utføres -
          <input
          style="margin-right: 0.5rem"
          type="date" value="${model.inputs.drawDate}" 
          oninput="model.inputs.drawDate = (this.value)"
          min="2022-03-01"/>
          <button class="drawButton" onclick="drawUser(); updateView()">Trekk</button>
          </div>
      `;
}

function resetHappenings() {
  model.data.doneHappenings = []
  updateView()
}

function getDoneHappeningsCheckedHappening() {
  let checkedDoneHappenings = [];
  let happenings = model.data.doneHappenings;
  let happeningObj = getAllCheckedHappeningIds();
  for (x in happenings) {
    for (y in happeningObj) {
      if (happenings[x].happeningId === happeningObj[y]) {
        checkedDoneHappenings.push(happenings[x]);
      }
    }
  }
  return checkedDoneHappenings;
}

function getAllCheckedHappeningIds() {
  let checkedHappenings = [];
  let happenings = model.data.happenings;
  for (happening of happenings) {
    if (happening.isSelected === true) checkedHappenings.push(happening.id);
  }
  return checkedHappenings;
}
