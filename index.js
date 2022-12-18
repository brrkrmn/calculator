function getResult(operation) {
    while (findFirstOperatorIndex(operation) !== -1) {
        let firstOperatorIndex = findFirstOperatorIndex(operation);
        operation = calculate(operation, firstOperatorIndex)
    }
    return operation;
}
  
function findFirstOperatorIndex(operation) {
    const operators = ["x", "÷", "+", "-"];
    let firstOperatorIndex = -1;
    for (let operator of operators) {
      if (operation.includes(operator)) {
        firstOperatorIndex = operation.indexOf(operator);
        break;
      }
    }
    return firstOperatorIndex;
}
  
function findLeftNumber(operation, firstOperatorIndex) {
    let leftNumber = "";
    let currentIndex = firstOperatorIndex -1;
    const operators = ["+", "-", "x", "÷", undefined];
    while(!operators.includes(operation[currentIndex])) {
      leftNumber += operation[currentIndex];
      currentIndex--;
    }
    return parseInt(leftNumber.split("").reverse().join(''));
}
  
function findRightNumber(operation, firstOperatorIndex) {
    let rightNumber = "";
    let currentIndex = firstOperatorIndex + 1;
    const operators = ["+", "-", "x", "÷", undefined];
    while (!operators.includes(operation[currentIndex])) {
      rightNumber += operation[currentIndex];
      currentIndex++;
    }
    return parseInt(rightNumber);
}
  
function operate(leftNumber, rightNumber, operator) {
    let result = "";
    if (operator === "+") {
      result = leftNumber + rightNumber;
    } else if (operator === "-") {
      result = leftNumber - rightNumber;
    } else if (operator === "x") {
      result = leftNumber * rightNumber;
    } else {
      result = leftNumber / rightNumber;
    }
    return result;
}
  
function calculate(operation, firstOperatorIndex){
    let leftNumber = findLeftNumber(operation, firstOperatorIndex);
    let rightNumber = findRightNumber(operation, firstOperatorIndex);
    let operator = operation[firstOperatorIndex];
    let result = operate(leftNumber, rightNumber, operator);
    let currentOperation = leftNumber + operator + rightNumber;
    return operation.replace(currentOperation, result);
}

function addEventToDigits(screenText) {
    const buttons = document.querySelectorAll(".digit");
    for (const button of buttons) {
        button.addEventListener("click", () => {
            displayValue += button.value;
            screenText.textContent = displayValue;
        });
    };
}

function addEventToClearButton(screenText) {
    const clearButton = document.querySelector(".clear-button");
    clearButton.addEventListener("click", () => {
        displayValue = "";
        screenText.textContent = displayValue;
    });
}

function addEventToResultButton(screenText) {
    let resultButton = document.querySelector(".result-button");
    resultButton.addEventListener("click", () => {
        screenText.textContent += "=" + (getResult(screenText.textContent));
    })
}

function showDisplay() {
    let screenText = document.querySelector(".screen");
    addEventToClearButton(screenText);
    addEventToDigits(screenText);
    addEventToResultButton(screenText);
}

let displayValue = "";   
showDisplay();
