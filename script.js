// DOM selection
let globalcontainer = document.querySelector(`.conainercalculator`);
let screen = document.querySelector(`.screencalculator`);
let containercomponents = document.querySelector(`.containeroperationsandnumbers`);
let left = document.querySelector(`.leftside`);
let right = document.querySelector(`.rightside`);
let bottom = document.querySelector(`.bottomside`);
let clear = document.querySelector(`.clearbutton`);
let numb9 = document.querySelector(`.number9`);
let numb8 = document.querySelector(`.number8`);
let numb7 = document.querySelector(`.number7`)
let numb6 = document.querySelector(`.number6`)
let numb5 = document.querySelector(`.number5`)
let numb4 = document.querySelector(`.number4`)
let numb3 = document.querySelector(`.number3`)
let numb2 = document.querySelector(`.number2`)
let numb1 = document.querySelector(`.number1`)
let numb0 = document.querySelector(`.number0`)
let comma = document.querySelector(`.comma`)
let operation1 = document.querySelector(`.operation1`)
let operation2 = document.querySelector(`.operation2`)
let operation3 = document.querySelector(`.operation3`)
let operation4 = document.querySelector(`.operation4`)
let equal = document.querySelector(`.equal`)
// Addition operation
function add(a, b) {
  let sum = a + b;
  return sum;
}
//Subtraction operation
function subtract(a, b) {
  let reduction = a - b;
  return reduction;
}
//Multiplicaition
const multiply = function (a, b) {
  let multiplication = a * b;
  return multiplication;
};

// Division
function divide(a, b) {
  let division = a / b;
  return division;
}

/* Need to call the operation , and to use first and second numbers*/
function operate( firstnumber, operator, secondnumber) {
  if ((operator === `+`)) {
    return add(firstnumber, secondnumber);
  } else if ((operator === `-`)) {
    return subtract(firstnumber, secondnumber);
  } else if ((operator ===`*`)) {
    return multiply(firstnumber, secondnumber);
  } else if ((operator === `/`)) {
    return divide(firstnumber, secondnumber);
  }
}
// Storing the first number and second number and  the operation that user selects
let firstnumb = "";
let operation = "";
let secondnumb = "";
 
// append numbers
function appendNumber (number)
 { if(operation === ""){firstnumb = firstnumb + number; screen.value = firstnumb;} else {secondnumb = secondnumb + number; screen.value = secondnumb}}
// displaying numbers on the screen and storing the value
function typeTheValue () {
  numb9.addEventListener(`click`,()=>{appendNumber(9); });
  numb8.addEventListener(`click`, () => {appendNumber(8);  });
  numb7.addEventListener(`click`, () => {appendNumber(7) ; });
  numb6.addEventListener(`click`, () => {appendNumber(6);  });
  numb5.addEventListener(`click`, () => {appendNumber(5);});
  numb4.addEventListener(`click`, () => {appendNumber(4); });
  numb3.addEventListener(`click`, () => {appendNumber(3); });
  numb2.addEventListener(`click`, () => {appendNumber(2); });
  numb1.addEventListener(`click`, () => {appendNumber(1);});
  numb0.addEventListener(`click`, () => {appendNumber(0);});
  comma.addEventListener(`click`, () => {appendNumber("."); });
// maybe the operations will not work
  operation1.addEventListener(`click`, () => {operation= "+" ; screen.value = operation});
  operation2.addEventListener(`click`, () => {operation= "-" ; screen.value = operation });
  operation3.addEventListener(`click`, () => {operation= "*" ; screen.value = operation });
  operation4.addEventListener(`click`, () => {operation= "/" ; screen.value = operation });
  equal.addEventListener(`click`, () => {giveTheResult();  })
  clear.addEventListener(`click`,() => { clearTheScreen()});
}
 
typeTheValue ();

// give the result
let result = operate(firstnumb,operation,secondnumb);
function giveTheResult () {if(firstnumb !== "" &&  operation !== "" && secondnumb !== "" )
  {firstnumb = parseFloat(firstnumb);secondnumb = parseFloat(secondnumb);
    result = operate(firstnumb,operation,secondnumb);
     screen.value = result.toString();} 
    firstnumb = result.toString();
    secondnumb = "";
    operation = "";
}
// clear the screen
function clearTheScreen () {if(result !== "") {firstnumb = ""; operation= ""; secondnumb = ""; screen.value=""}}

