let numbers = document.getElementsByClassName('numbers'),
    operand;
for(let i=0; i<numbers.length; i++){
    let singleNumber = numbers[i];
    singleNumber.onclick = function(){
      textField.value += singleNumber.value;
    };
};

document.getElementById("btnC").onclick = function clearField(e) {
  document.getElementById("textField").value = "";
};

document.getElementById("btnPlus").onclick = function(e) {
  operand = document.getElementById("textField").value;
  clearField;
};




/*
let result = {
  currentResult:0,
  currentOperationType:0,
  newOperand:0
}*/