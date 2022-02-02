// Module with math operations (sum, rest, multiply, div, and get percentage of a number)

const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  const percentage = (a, per) => (a / 100) * per;

  return{
    add,
    sub,
    mul,
    div,
    percentage
  }

})();

// This function take all the methods above and ejecute based in user selection

function operate(operation, a, b) {
  switch(operation){
    case "add":
      return calculator.add(a, b);
    case "sub":
      return calculator.sub(a, b);
    case "mul":
      return calculator.mul(a, b);
    case "div":
      return calculator.div(a, b);
    case "per":
      return calculator.percentage(a, b);
  }
}

// DOM:
// Buttons:
const screen = document.querySelector(".container-result");
const numbers = document.querySelectorAll("div.container-buttons > div.number");
const operations = document.querySelectorAll("div.container-buttons > div.button-operation")
// Others:
const clean = document.querySelector(".button-clean");
const delet = document.querySelector(".delete");

// Add numbers on screen:

let screenA = ""; // Store clicked numbers, if click then screenA += number;
let screenB = ""; // Same idea;

let fill = false;
let weHaveResult = false;

let opt = "";

let x;
let y;

function addNumbers(){
  
  const emptScreen = () => screen.textContent = "";

  operations.forEach((operation) => {
    operation.addEventListener("click", () => {
      screen.textContent = "";
      opt = operation.textContent;
      fill = true;
    })
  })

  numbers.forEach((number)  => {
    number.addEventListener("click", () => {
      if(weHaveResult == false && fill == false){
        screen.textContent += number.textContent;
        screenA = screen.textContent.trim();
        x = parseInt(screenA);
      }
      else if(weHaveResult == false && fill == true){
        screen.textContent += number.textContent;
        screenB = screen.textContent.trim();
        y = parseInt(screenB);
      }
      else if(weHaveResult == true && fill == true){
        screen.textContent += number.textContent;
        screenB = screen.textContent.trim();
        y = parseInt(screenB);
      }
      else if(weHaveResult == true && fill == false){
        screen.textContent = "";
        screen.textContent += number.textContent; 
        weHaveResult = false;
      }
    })
  }) 
}

addNumbers();

const getResult = document.querySelector(".button-result");

let theResult;
const calculateDOM = (() => {
  getResult.addEventListener("click", () => {
    if(opt == "+"){
      theResult = operate("add", x, y)
      weHaveResult = true; 
      fill = false;
      screen.textContent = operate("add", x, y);
    }
    else if(opt == "-"){
      theResult = operate("sub", x, y);
      weHaveResult = true;
      fill = false;
      screen.textContent = operate("sub", x, y);
    }
    else if(opt == "x"){
      theResult = operate("mul", x, y);
      weHaveResult = true;
      fill = false;
      screen.textContent = operate("mul", x, y);
    }
    else if(opt == "/"){
      theResult = operate("div", x, y);
      weHaveResult = true;
      fill = false;
      screen.textContent = operate("div", x, y)
    }
    else if(opt == "%"){
      theResult = operate("per", x, y)
      weHaveResult = true;
      fill = false;
      screen.textContent = operate("per", x, y);
    }
    x = theResult;
  })
})();

// Other Buttons:

const cleanDelete = (() => {
  clean.addEventListener("click", () =>{
    screenA = "";
    screenB = "";
    screen.textContent = "";
    x = 0; y = 0;
    opt = "";
    weHaveResult = false;
    fill = false;
  })
})();
