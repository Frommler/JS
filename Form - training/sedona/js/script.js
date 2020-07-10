function validate() {
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var userPassword = document.getElementById("password");
    var userPswRepeat = document.getElementById("psw-repeat");

    if (!userName.value) {
        userName.style.border = "2px solid red";
        return false;
    }
    if (!userEmail.value) {
        userEmail.style.border = "2px solid red";
        return false;
    }
    if (!userPassword.value) {
        userPassword.style.border = "2px solid red";
        return false;
    }
    if (!userPswRepeat.value) {
        userPswRepeat.style.border = "2px solid red";
        return false;
    }
    return true;
}