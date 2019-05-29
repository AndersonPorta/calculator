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
var currentNumber = '0';
var previousNumber;
var evalStringArray = []; // Will hold the operations we need to compute

// Update UI and assign values to variables when number buttons are clicked 
var updateDisplyValue = (clickObj) => {
    var btnText = clickObj.target.innerText;
    if (currentNumber === '0') {
        currentNumber = '';
    }

    currentNumber += btnText;
    displayVal.innerText = currentNumber;
}

var performOperation = (clickObj) => {
    var operator = clickObj.target.innerText;

    switch (operator) {
        case '+':
            previousNumber = currentNumber;
            currentNumber = '0';
            displayVal.innerText = previousNumber;
            evalStringArray.push(previousNumber);
            evalStringArray.push('+');
            break;
        case '-':
            previousNumber = currentNumber;
            currentNumber = '0';
            displayVal.innerText = previousNumber;
            evalStringArray.push(previousNumber);
            evalStringArray.push('-');        
            break;
        case 'x':
            previousNumber = currentNumber;
            currentNumber = '0';
            displayVal.innerText = previousNumber;
            evalStringArray.push(previousNumber);
            evalStringArray.push('*');
            break;
        case '÷':
            previousNumber = currentNumber;
            currentNumber = '0';
            displayVal.innerText = previousNumber;
            evalStringArray.push(previousNumber);
            evalStringArray.push('/');
            break;
        case '=':
            evalStringArray.push(currentNumber);
            var result = eval(evalStringArray.join(' '));
            currentNumber = result + '';
            displayVal.innerText = currentNumber;
            evalStringArray = [];
            break;
        default:
            break;
    }
}

// Create event listeners for each button on the calculator
for(let i = 0; i < numberArray.length; i++) {
    numberArray[i].addEventListener('click', updateDisplyValue, false);
}


for(let i = 0; i < operatorArray.length; i++) {
    operatorArray[i].addEventListener('click', performOperation, false);
}

// Reset to 0 when AC button is clicked
clearBtn.onclick = () => {
    numberArray = '';
    operatorArray = '';
    previousNumber = undefined;
    currentNumber = '0';
    displayVal.innerText = currentNumber;
}

// Remove right most digit when backspace button is clicked
backspaceBtn.onclick = () => {
    var numberLength = currentNumber.length;
    currentNumber = currentNumber.slice(0, numberLength - 1);

    // if current number is empty, display zero instead of ''
    if(currentNumber === '') {
        currentNumber = '0';
    }

    displayVal.innerText = currentNumber;
}

// Only allow one '.' on a number  
decimalBtn.onclick = () => {
    if(!currentNumber.includes('.')) {
        currentNumber += '.';
    }

    displayVal.innerText = currentNumber;
}