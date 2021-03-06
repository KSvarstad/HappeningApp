function updateViewHappenings() {
  document.getElementById('app').innerHTML = /*html*/ `
  <div class="container">
    ${happenMenuHtml()}
      <div class="drawColumn">
      <h2>Trekk!</h2>
      Antall trekninger -
      <input 
      style="margin-right: 0.5rem; width: 45px;"
      type="number"
      size="1" 
      value="${model.inputs.drawCount}" 
      onchange="model.inputs.drawCount=parseInt(this.value)"
      /> <br /> <br />
      Skal utføres - <br /> <br />
      <input
      style="margin-right: 0.5rem"
      type="date" value="${model.inputs.drawDate}" 
      oninput="model.inputs.drawDate = (this.value)"
      min="2022-03-01"/> <br /><br />
      <span style="color: #FF5733">Så fort som mulig -</span>
      <input type="checkbox" onclick="toggleDoAsapSelected()"
      ${getChecked(model.inputs.doAsap)}/> <br /><br />
      <span style="color: #0075FF">Innen en uke</span> -
      <input type="checkbox" onclick="toggleDoWithinWeekSelected()"
      ${getChecked(model.inputs.doWithinWeek)}/> <br /> <br />
      <span style="color: green">Innen to dager</span> -
      <input type="checkbox" onclick="toggleDoWithinTwoDaysSelected()"
      ${getChecked(model.inputs.doWithinTwoDays)}/> <br /> <br />
      <button class="drawButton" onclick="drawUser(); updateView()">Trekk</button>


      </div>
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
  )}/> <span style="color: #0075FF; font-weight: 600;">Velg alle</span><br/>
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
    // doDate.setDate(doDate.getDate()+7);
    const time = new Date(drawTime[i].time);
    const dateText = getDateStringForDisplay(time);
    const dayName = dayNames[time.getDay()];
    const doneHappening = happenings[i];
    const date = doneHappening.doDate
    html += /*html*/ `
    <div class="doneHappeningBox">
    <h3>Trekning - <span style="color: #FF5733;">${doneHappening.name
    }</span>
    </h3> 
    
    <h4>Trukket person - <span style="color: #6AB334;">${doneHappening.userDrawn
    }</span></h4>
      `;
    if (date === 'Så fort som mulig') {
      html += /*html*/ `
      <h4 id=>Utføres - 
      <span style="color: #0075FF">Så fort som mulig</span></h4>
      `;
    }

    if (date === 'Innen en uke') {
      time.setDate(time.getDate() + 7)
      const doWithinText = getDateStringForDisplay(time).substr(0,9);
      const doWithinName = dayNames[time.getDay()];
      html += /*html*/ `
      <h4 id=>
      Utføres innen - 
      <span style="color: #0075FF">${doWithinName} ${doWithinText}
      </span>
      </h4>
      `;
    }
    
    if (date === 'Innen to dager') {
      time.setDate(time.getDate() + 2)
      const doWithinText = getDateStringForDisplay(time).substr(0,9);
      const doWithinName = dayNames[time.getDay()];
      html += /*html*/ `
      <h4 id=>
      Utføres innen - 
      <span style="color: #0075FF">${doWithinName} ${doWithinText}
      </span>
      </h4>
      `;
    }

    if (date !== null && date !== 'Så fort som mulig' && date !== 'Innen en uke' && date !== 'Innen to dager') {
      const doDate = new Date(date)
      let doDateText = getDateStringForDisplay(doDate).substr(0, 9)
      let doDateName = dayNames[doDate.getDay()]
      html += /*html*/ `
        <h4 id=>Utføres - 
        <span style="color: #0075ff">${doDateName} ${doDateText}</span></h4>
        `;
    }

    if (doneHappening.detailsShown === true) {
      html += /*html*/`
      <div>
      <h4>Kommentarer - </h4>`
      for (let j = 0; j < comments.length; j++) {
        let comment = comments[j]
        if(comment.comment === 'Utført' || comment.comment === 'utført'){
          html += /*html*/`
          <img src="img/greenCheck2.png" alt=""/> <br />
          `;
        }
        const commentTime = new Date(comments[j].commentTime);
        const commentTimeText = getDateStringForDisplay(commentTime);
        const commentDayName = dayNames[commentTime.getDay()];
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
          oninput="model.inputs.commentHappening.comment=this.value , model.inputs.commentHappening.happeningId=${doneHappening.id} "/> 
          
        <button class="btn--top" onclick=addComment(${doneHappening.id
        })>Legg til kommentar</button>
        <button class="btn--top" id="slette" onclick="goToDeleteCommentPage(${doneHappening.id
        })">Slett en kommentar</button>
        </form>
        <h4>Trukket - ${dayName} ${dateText}</h4>
        </div> 
        `;
    }
    html += /*html*/`<button class="btn--top"
        title="Detaljer" id="detailsSwich" 
        onclick="toggleDetailsSelected(${doneHappening.id})"
        ${getChecked(doneHappening.detailsShown)}>Detaljer</button>
        <hr>
        </div>
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
