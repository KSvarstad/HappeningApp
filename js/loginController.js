function validate(){
    let password = document.getElementById("password").value;

    password == "temp123" ? model.app.page = 'admin' : alert("Feil passord!");
    updateAdminView();
}
