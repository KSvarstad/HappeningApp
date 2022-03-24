function updateAdminViewHome() {
  document.getElementById('app').innerHTML = /*html*/ `
  <div 
  class="containerAdmin"
  id="containerAdmin"
  onscroll="getScrollPoistionUsersAdmin()">
    ${createMenuHtmlAdmin()}
    
      <div class="happeningsAdminColumn">
        <h3 class="headerAdmin">Arrangementer</h3>

        
        <div class="adminBoxOne">
        
        <div class="addArrangementBox">
        <form>
        <input 
        oninput="model.inputs.newHappening.name = this.value" 
        placeholder="Legg til arrangement"
        type="text"
        onfocus="this.value=''"
        oninvalid="this.setCustomValidity('Feltet kan ikke være tomt')"
        title="Skriv navn på arrangement"
        required
        >
        <button 
        title="Legg til" 
        class="addBtn" 
        onclick="createNewHappening()">+</button>
        </form>
      </div>
        ${getAllHappeningsHome()}
        </div>
      </div>
      
      <div 
      class="usersAdminColumn"
      id="usersAdminColumn"
      onscroll="getScrollPoistionUsersAdmin()">
        <h3 class="headerAdmin2">Personer</h3>
        
        <div class="adminBoxTwo">
        
        <div class="addPersonBox">
        <form>
        <input
        class="inputFieldUser"
        oninput="model.inputs.newUser.name = this.value" 
        placeholder="Legg til person" 
        type="text"
        onfocus="this.value=''"
        oninvalid="this.setCustomValidity('Feltet kan ikke være tomt')"
        title="Skriv navn på person"
        required
        >
        <button title="Legg til" class="addBtn" onclick="createNewUser()">+</button>
        </form>
        </div>

        ${getusersHome()}
        
        </div>
      </div>
    </div>
        `;
}

function getusersHome() {
  let html = '';
  let users = model.data.users
  users.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    html += /*html*/ `
            <ul>
            <li>${user.name} 
            <button title="Rediger" class="btn--edit"onclick="goToEditUserPage(${user.id})">✎</button> 
            <button title="Slett" class="btn--delete"onclick="goToDeleteUserPage(${user.id})">🗑</button><br></li>
            </ul>
        `;
  }
  return html;
}

function getAllHappeningsHome() {
  let html = '';
  let happenings = model.data.happenings;
  // happenings.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
  for (let i = 0; i < happenings.length; i++) {
    const happening = happenings[i];
    html += /*html*/ `
            <ul>

            <li>${happening.name} 
            <button title="Rediger" class="btn--edit"onclick="goToEditHappeningPage(${happening.id})">✎</button> 
            <button title="Slett" class="btn--delete"onclick="goToDeleteHappeningPage(${happening.id})">🗑</button></li>

            </ul>      
        `;
  }
  return html;
}


