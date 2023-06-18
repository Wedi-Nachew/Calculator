let firstNumber = 0;
let secondNumber = 0;
let operator = null;
let count = 0;
let result = 0;
const clear = document.querySelector("#clear")
const floatPoint = document.querySelector("#point")

function add(firstNumber,secondNumber){
    firstNumber = parseFloat(firstNumber)
    secondNumber = parseFloat(secondNumber)
    return Math.round((firstNumber + secondNumber) * 10000)/10000
}
function subtract(firstNumber,secondNumber){
    firstNumber = parseFloat(firstNumber)
    secondNumber = parseFloat(secondNumber)
    return Math.round((firstNumber - secondNumber) *10000)/ 10000
} 
function multiply(firstNumber,secondNumber){
    firstNumber = parseFloat(firstNumber)
    secondNumber = parseFloat(secondNumber)
    return Math.round((firstNumber * secondNumber) *10000)/10000
}
function divide(firstNumber,secondNumber){
    firstNumber = parseFloat(firstNumber)
    secondNumber = parseFloat(secondNumber)
    return Math.round((firstNumber / secondNumber) *10000)/10000
}
function operate(operator,firstNumber,secondNumber){
    if (operator == '+'){
        return add(firstNumber,secondNumber)
    } else if (operator == '-'){
        return subtract(firstNumber,secondNumber)
    } else if (operator == '*'){
        return multiply(firstNumber,secondNumber)
    } else if (operator == '/'){
        return divide(firstNumber,secondNumber)
    }
}

const showNumbers = document.querySelector("#show-numbers")
const getNumber = document.querySelectorAll("#num")
const operators = document.querySelectorAll(".operator")
const equalsTo  = document.querySelector("#equals-to")
const backspace = document.querySelector("#backspace")
showNumbers.textContent = 0;


 getNumber.forEach(item => item.addEventListener("click", (e)=> { 
    if(!operator && firstNumber){
        firstNumber += e.target.dataset.value;
        showNumbers.textContent = firstNumber;
    } else if(!operator && !firstNumber){
        firstNumber = e.target.dataset.value;
        showNumbers.textContent = firstNumber;
    } else if(operator && !secondNumber) {
        secondNumber = e.target.dataset.value;
        showNumbers.textContent = secondNumber;
    } else if(operator && secondNumber) {
        secondNumber += e.target.dataset.value;
        showNumbers.textContent = secondNumber;
    }
})) ;
operators.forEach(item => item.addEventListener("click", (e)=> {
    if (!count) {
        operator = e.target.dataset.value;
        count++;
    } else if(count){
        firstNumber = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = firstNumber;
        operator = e.target.dataset.value;
        secondNumber=0;
    }
}))
equalsTo.addEventListener("click", ()=> {
    if(firstNumber && secondNumber && operator) {
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
    } else{
        showNumbers.textContent = "Error";
    }
})

clear.addEventListener("click", () =>{
    firstNumber = 0;
    secondNumber = 0;
    showNumbers.textContent = 0;
})

floatPoint.addEventListener("click", ()=> {
    if(!operator) {
        firstNumber += ".";
        showNumbers.textContent = firstNumber;
    }else if(operator) {
        secondNumber += ".";
        showNumbers.textContent = secondNumber;
    }
})

backspace.addEventListener("click", () => {
    if(!operator){
        firstNumber = firstNumber.slice(0,firstNumber.length -1)
        // firstNumber = Array.from(firstNumber);
        // firstNumber.pop()
        // firstNumber = firstNumber.join("")
        showNumbers.textContent = firstNumber;
    } else if(operator) {
        secondNumber = secondNumber.slice(0,secondNumber.length-1)
        showNumbers.textContent = secondNumber;
    }
})