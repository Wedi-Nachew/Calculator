let firstNumber = null;
let secondNumber = null;
let operator = null;

function add(firstNumber,secondNumber){
    return (~~firstNumber + ~~secondNumber)
}
function subtract(firstNumber,secondNumber){
    return (~~firstNumber - ~~secondNumber)
} 
function multiply(firstNumber,secondNumber){
    return (~~firstNumber * ~~secondNumber)
}
function divide(firstNumber,secondNumber){
    return (~~firstNumber / ~~secondNumber)
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


 getNumber.forEach(item => item.addEventListener("click", (e)=> { 
    if(!operator && !firstNumber) {
        firstNumber = e.target.dataset.value;
        showNumbers.textContent = firstNumber;
    } else if (!operator && firstNumber){
        firstNumber += e.target.dataset.value;
        showNumbers.textContent = firstNumber;
    } else if (operator && !secondNumber) {
        secondNumber = e.target.dataset.value;
        showNumbers.textContent = secondNumber;
    } else if (operator && secondNumber) {
        secondNumber += e.target.dataset.value;
        showNumbers.textContent = secondNumber;
    }
})) ;
operators.forEach(item => item.addEventListener("click", (e)=> {
    operator = e.target.dataset.value;
    
}))
equalsTo.addEventListener("click", ()=> {
    let result = operate(operator,firstNumber,secondNumber);
    showNumbers.textContent = result;
})




