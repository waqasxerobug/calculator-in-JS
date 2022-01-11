const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
function calculationResult(calculationType) {
  let mathOperator;
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  if (calculationType==='ADD') {
    currentResult += enteredNumber;
    mathOperator='+';
    
  } 
  else if (calculationType==='SUBTRACT')
  {
    currentResult -= enteredNumber;
    mathOperator='-';
  }
  else if (calculationType==='MULTIPLY')
  {
    currentResult *= enteredNumber;
    mathOperator='*';
  }
  else
  {
    currentResult /= enteredNumber;
    mathOperator='/';
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
calculationResult('ADD');
}

function subtract() {
  
calculationResult('SUBTRACT');
}

function multiply() {
  calculationResult('MULTIPLY');
}

function divide() {
  calculationResult('DIVIDDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
