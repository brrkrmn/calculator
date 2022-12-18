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

function showDisplay() {
    let screenText = document.querySelector(".screen");
    addEventToClearButton(screenText);
    addEventToDigits(screenText);
}

let displayValue = "";   
showDisplay();


const add = (number1, number2) => number1 + number2;
const subtract = (number1, number2) => number1 - number2;
const multiply = (number1, number2) => number1 * number2;
const divide = (number1, number2) => number1 / number2;

function operate(number1, operator, number2) {
    if (operator === "+") {
        add(number1, number2);
    } else if (operator === "-") {
        subtract(number1 - number2);
    } else if (operator === "x") {
        multiply(number1, number2);
    } else if (operator === "÷") {
        divide(number1, number2);
    }
}