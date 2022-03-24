function loginView() {
  document.getElementById('app').innerHTML = /*html*/ `
    ${loginMenuHtml()}
    <form>
        <input
        class="loginInput"
        id="password"
        type="password"
        placeholder="Passord"
        title="Skriv inn passord"
        required
        />
        <input class="btn--top" style="cursor: pointer;" type="submit" onclick=validate() value="Logg inn">
    </form>
        `;
  document.getElementById('password').focus();
}

function loginMenuHtml() {
  return /*html*/ `
        <div class="topMenu">
        <button class="btn--top" onclick="model.app.page='happening'; updateView()">Tilbake</button>
        </div>
    `;
}