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
// window.addEventListener("keydown", (e)=> {
//     console.log(e)
// })

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
    if(isFinite(firstNumber) && isFinite(secondNumber) && operator) {
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
    } else if (!operator || !secondNumber){
        showNumbers.textContent = "Error";
        firstNumber = 0;
        secondNumber = 0;
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
    if(firstNumber.length > 1){
        firstNumber = firstNumber.slice(0,firstNumber.length -1)
        showNumbers.textContent = firstNumber;
    } else if(secondNumber.length > 1){
        secondNumber = secondNumber.slice(0,secondNumber.length-1)
        showNumbers.textContent = secondNumber;
    }else {
        firstNumber=0;
        secondNumber=0;
        showNumbers.textContent = 0;
    }
})

document.addEventListener("keydown", (e)=> {
    if  (e.keyCode == 20 || e.keyCode == 16 || e.keyCode == 9 || e.keyCode == 27 || e.keyCode == 17|| e.keyCode == 91 
        || e.keyCode == 19 || e.keyCode == 18 || e.keyCode == 93 || ( e.keyCode >= 35 && e.keyCode <= 40 ) || e.keyCode == 45  
        || ( e.keyCode >= 33 && e.keyCode <= 34 ) || (e.keyCode >= 112 && e.keyCode <= 123)  || (e.keyCode >= 144 && e.keyCode <= 145 )) { 
       return false;
    }  else if(secondNumber.length > 1  && 
        e.key === "Backspace" && firstNumber.length > 1){
        secondNumber = secondNumber.slice(0,secondNumber.length-1)
        showNumbers.textContent = secondNumber;
    } else if(firstNumber.length > 1  && e.key === "Backspace"){       
        firstNumber = firstNumber.slice(0,firstNumber.length -1)
        showNumbers.textContent = firstNumber;
    } else if(e.key === "Backspace") {
        firstNumber=0;
        secondNumber=0;
        showNumbers.textContent = 0;
    }else if(firstNumber && secondNumber && operator && e.key == "=") {
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
    } else if(e.key== "=" && (!firstNumber || !secondNumber || !operator)){
        showNumbers.textContent = "Error";
        firstNumber = 0;
        secondNumber = 0;   
    }
    else if(!operator && firstNumber && Number.isFinite(++e.key)){
        firstNumber += e.key;
        showNumbers.textContent = firstNumber;
    } else if(!operator && !firstNumber && Number.isFinite(++e.key)){
        firstNumber = e.key;
        showNumbers.textContent = firstNumber;
    } else if(operator && !secondNumber && Number.isFinite(++e.key)) {
        secondNumber = e.key;
        showNumbers.textContent = secondNumber;
    } else if(operator && secondNumber && Number.isFinite(++e.key)) {
        secondNumber += e.key;
        showNumbers.textContent = secondNumber;
    } else if (!count && e.key == "/") {
        operator = e.key;
        e.preventDefault()
        count++;
    } else if(count && e.key == "/"){
        firstNumber = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = firstNumber;
        operator = e.key;
        e.preventDefault()
        secondNumber=0;
    }else if (!count && e.key != "/" ) {
        operator = e.key;
        count++;
    } else if(count && e.key != "/"){
        firstNumber = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = firstNumber;
        operator = e.key;
        secondNumber=0;
    }
})

