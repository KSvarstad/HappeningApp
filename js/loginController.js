function validate(){
    let password = document.getElementById("password").value;
    password == "" ? model.app.page = 'admin' : alert("Feil passord!");
    updateAdminView();
}
