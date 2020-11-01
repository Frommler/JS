let numbers = document.getElementsByClassName('numbers'),
    value = document.getElementById("textField").value,
    Result = document.getElementById("btnResult");


for(let i=0; i<numbers.length; i++){
    let singleNumber = numbers[i];
    singleNumber.onclick = function(){
      textField.value += singleNumber.value;
    };
};

document.getElementById("btnPlus").onclick = function(e) {
  document.getElementById("textField").value = document.getElementById("textField").value + "+";
};

document.getElementById("btnMinus").onclick = function(e) {
  document.getElementById("textField").value = document.getElementById("textField").value + "-";
};

document.getElementById("btnDevide").onclick = function(e) {
  document.getElementById("textField").value = document.getElementById("textField").value + "/";
};

document.getElementById("btnMultiple").onclick = function(e) {
  document.getElementById("textField").value = document.getElementById("textField").value + "*";
};

document.getElementById("btnDot").onclick = function(e) {
  document.getElementById("textField").value = document.getElementById("textField").value + ".";
};

document.getElementById("btnC").onclick = function clearField(e) {
  document.getElementById("textField").value = "";
};

Result.onclick = function() {
  textField.value = eval(textField.value);
};