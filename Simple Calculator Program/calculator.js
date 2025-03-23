let number;
let firstNumber; 
let secondNumber; 
const addition = document.getElementById("add");
const subtraction = document.getElementById("subtract");
const division = document.getElementById("divide");
const multiplication = document.getElementById("multiply");
const result = document.getElementById("myResult");

addition.onclick = function(){
    firstNumber = parseInt(document.getElementById("number1").value);
    secondNumber = parseInt(document.getElementById("number2").value);
    number = firstNumber + secondNumber;
    result.textContent = number;
}

subtraction.onclick = function(){
    firstNumber = parseInt(document.getElementById("number1").value);
    secondNumber = parseInt(document.getElementById("number2").value);
    number = firstNumber - secondNumber;
    result.textContent = number;
}

division.onclick = function(){
    firstNumber = parseInt(document.getElementById("number1").value);
    secondNumber = parseInt(document.getElementById("number2").value);
    number = firstNumber / secondNumber;
    result.textContent = number;
}

multiplication.onclick = function(){
    firstNumber = parseInt(document.getElementById("number1").value);
    secondNumber = parseInt(document.getElementById("number2").value);
    number = firstNumber * secondNumber;
    result.textContent = number;
}
