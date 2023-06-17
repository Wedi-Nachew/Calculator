let firstNumber = null;
let secondNumber = null;
let operator = null;
let count = 0;

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
const numbres = document.querySelectorAll("#num")
const operators = document.querySelectorAll(".operator")
const equalsTo  = document.querySelector("#equals-to")


 numbres.forEach(item => item.addEventListener("click", (e)=> {
    let number = e.target.dataset.value;
    showNumbers.textContent = number;
    if(!operator) {
        firstNumber = number
    } else {
        secondNumber = number
    }
    
})) ;
operators.forEach(item => item.addEventListener("click", (e)=> {
    operator = e.target.dataset.value;
    
}))






/*


const display = renderNumbers()*/