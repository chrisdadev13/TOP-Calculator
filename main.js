// Operations on a simple calculator

function sum(a, b){
    return a + b;
}

function rest(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

// Operate function:

function operate(operation, a, b){
    return operation(a, b);
}

// UI

// Operation container
let operationScreen = document.querySelector("div.operation");
//console.log(operationScreen);
let resultScreen = document.querySelector("div.result");
//console.log(resultScreen);

// Numerical buttons function:
// Create a 0-1 variable, if 0 then add numbers to screenValueA, else if 1 then add numbers to screenValueB
// The 0-1 variable is about to change when user click in the operation buttons
let numButtons = document.querySelectorAll("div.container-buttons > div.number");

let screenValueA = ""; // This variable will have the numerical values we click
let screenValueB = "";

let addSecondValue = false; 
 
function addNumbers(){
  numButtons.forEach((number) => {
    number.addEventListener("click", () => {
      if(addSecondValue == false){
        screenValueA += number.textContent; 
        resultScreen.textContent += number.textContent; 
      }
      else{
        screenValueB += number.textContent;
        resultScreen.textContent += number.textContent; 
      }
    })
  })
}

// Numbers to operate 
let numberA = 0;
let numberB = 0;
//Operation
let mathOperation = "";
// Operation buttons

let operationBtn = document.querySelectorAll("div.container-buttons > div.button-operation");

addNumbers();

operationBtn.forEach((operation) => {
  operation.addEventListener("click", () => { 
    numberA = parseInt(screenValueA);
    addSecondValue = true;
    if(operation.textContent == "/"){
      mathOperation = divide;
      //resultScreen.textContent += " / "; 
    }
    else if(operation.textContent == "x"){
      mathOperation = multiply;
      //resultScreen.textContent += " x ";
    }
    else if(operation.textContent == "-"){
      mathOperation = rest;
      //resultScreen.textContent += " - ";
    }
    else if(operation.textContent == "+"){
      mathOperation = sum;
      //resultScreen.textContent += " + ";
    }
    console.log(resultScreen.textContent);
    numberA = parseInt(resultScreen.textContent);
    resultScreen.textContent = ""; 
  })
})

let result = document.querySelector("div.button-result");

result.addEventListener("click", () => {
  numberB = parseInt(screenValueB);

  let result = operate(mathOperation, numberA, numberB); 
  
  operationScreen.textContent = ""; //Restart UI 
  addSecondValue = false; //Restart screenValueA 
  screenValueA = ""; screenValueB = ""; //Restart

  resultScreen.textContent = result;
  console.log(resultScreen.textContent);
})

let cleanBtn = document.querySelector("div.button-clean");

cleanBtn.addEventListener("click", () => {
  screenValueA = "";
  screenValueB = "";
  numberA = 0;
  numberB = 0;
  resultScreen.textContent = "";
})
