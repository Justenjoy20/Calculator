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

/* Needs to call the operation , and to use first and second numbers*/
function operate(operator, firstnumber, secondnumber) {
  if ((operator = `+`)) {
    return add(firstnumber, secondnumber);
  } else if ((operator = `-`)) {
    return subtract(firstnumber, secondnumber);
  } else if ((operator = `*`)) {
    return multiply(firstnumber, secondnumber);
  } else if ((operator = `/`)) {
    return division(firstnumber, secondnumber);
  }
}
//Function for displaying numbers on the screen

function displayScreen () {numb9.addEventListener(`click`,()=>{screen.innerHTML = `9`});
numb8.addEventListener(`click`, () => {screen.innerHTML = `8`});
numb7.addEventListener(`click`, () => {screen.innerHTML = `7`});
numb6.addEventListener(`click`, () => {screen.innerHTML = `6`});
numb5.addEventListener(`click`, () => {screen.innerHTML = `5`});
numb4.addEventListener(`click`, () => {screen.innerHTML = `4`});
numb3.addEventListener(`click`, () => {screen.innerHTML = `3`});
numb2.addEventListener(`click`, () => {screen.innerHTML = `2`});
numb1.addEventListener(`click`, () => {screen.innerHTML = `1`});
numb0.addEventListener(`click`, () => {screen.innerHTML = `0`});
comma.addEventListener(`click`, () => {screen.innerHTML = `.`});
operation1.addEventListener(`click`, () => {screen.innerHTML = `+`});
operation2.addEventListener(`click`, () => {screen.innerHTML = `-`});
operation3.addEventListener(`click`, () => {screen.innerHTML = `*`});
operation4.addEventListener(`click`, () => {screen.innerHTML = `/`});
equal.addEventListener(`click`, () => {screen.innerHTML = `=`});
clear.addEventListener(`click`,() => {screen.innerHTMl = ``/*this one don't work */})}

displayScreen ()
// Storing the display value into a variable
let tracker = ``

