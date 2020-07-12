function validate() {
    var Name = document.getElementById("name");
    var Email = document.getElementById("email");
    var Password = document.getElementById("password");
    var PswRepeat = document.getElementById("psw-repeat");
    var gender = document.getElementById("Gender");
    var option = document.getElementsByClassName("option");

    if (!Name.value) {
        Name.style.border = "2px solid red";
        return false;
    }
    if (!Email.value) {
        Email.style.border = "2px solid red";
        return false;
    }
    if (!Password.value) {
        Password.style.border = "2px solid red";
        return false;
    }
    if (!PswRepeat.value) {
        PswRepeat.style.border = "2px solid red";
        return false;
    }
    if ((option.value != "Male") || (option.value != "Female") ) {
        option.style.border = "2px solid red";
       return false;
    }
    return true;
}

function validateName(){
	var x = document.forms["commentform"]["Name"].value;
	if (x.length < 3) {
		document.getElementById('au').innerHTML = '(мин. 3 символа)';
		return false;
    }
}