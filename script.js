let currentInput = '';
let previousInput = '';
let operator = '';
let isNewInput = false;

function appendNumber(number) {
  // If it's a new input (after pressing '='), clear the current input.
  if (isNewInput) {
    currentInput = '';
    isNewInput = false;
  }

  currentInput += number;
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function setOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = '';
  updateDisplay();
}

function calculate() {
  if (previousInput === '' || currentInput === '') return;

  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert("Cannot divide by zero!");
        clearDisplay();
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = '';
  previousInput = '';
  isNewInput = true;  // After calculation, the next input will be new.
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay();
}

function updateDisplay() {
  // If there's a previous input and an operator, show the current calculation.
  if (previousInput !== '' && operator !== '') {
    document.getElementById('display').value = previousInput + ' ' + operator + ' ' + currentInput;
  } else {
    document.getElementById('display').value = currentInput;
  }
}
