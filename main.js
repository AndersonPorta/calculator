// Store numbers
var oneVal = document.getElementById("calc-one");
var twoVal = document.getElementById("calc-two");
var threeVal = document.getElementById("calc-three");
var fourVal = document.getElementById("calc-four");
var fiveVal = document.getElementById("calc-five");
var sixVal = document.getElementById("calc-six");
var sevenVal = document.getElementById("calc-seven");
var eightVal = document.getElementById("calc-eight");
var nineVal = document.getElementById("calc-nine");
var zeroVal = document.getElementById("calc-zero");

// Store operators
var decimalBtn = document.getElementById("calc-decimal");
var clearBtn = document.getElementById("calc-clear");
var backspaceBtn = document.getElementById("calc-backspace");
var displayVal = document.getElementById("display-val");
var divisionBtn = document.getElementById("calc-division");
var multiplyBtn = document.getElementById("calc-multiply");
var minusBtn = document.getElementById("calc-minus");
var plusBtn = document.getElementById("calc-plus");
var equalsBtn = document.getElementById("calc-equals");

// Store numbers
var numberArray = document.getElementsByClassName("calc-btn-number");
var operatorArray = document.getElementsByClassName("calc-btn-operator");

// Variables
var currentNumber = '545657';
var previousNumber 
displayVal.innerHTML = '545657';


// Reset to 0 when AC button is clicked
clearBtn.onclick = () => {
    currentNumber = '0';
    displayVal.innerHTML = currentNumber;
}

// Remove right most digit when backspace button is clicked
backspaceBtn.onclick = () => {
    var numberLength = currentNumber.length;
    currentNumber = currentNumber.slice(0, numberLength - 1);

    if (currentNumber === '') {
        currentNumber = '0';
    }

    displayVal.innerText = currentNumber;
}