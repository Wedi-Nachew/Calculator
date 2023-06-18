let firstNumber = 0;
let secondNumber = 0;
let operator = null;
let count = 0;
let result = 0;

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
    } else if( count && result && !secondNumber) {
        secondNumber = e.target.dataset.value;
        showNumbers.textContent = secondNumber;
    } else if (count && result && secondNumber) {
        secondNumber += e.target.dataset.value;
        showNumbers.textContent = secondNumber;
    }


})) ;
operators.forEach(item => item.addEventListener("click", (e)=> {
    if (!count) {
        operator = e.target.dataset.value;
        count++
    }else if(count && !result) {
        firstNumber = operate(operator,firstNumber,secondNumber);
        result = firstNumber;
        secondNumber = 0;
        showNumbers.textContent = firstNumber;
        operator= e.target.dataset.value
    // } else if( count && result && !secondNumber){
    //     firstNumber = operate(operator,firstNumber,secondNumber);
    //     showNumbers.textContent = firstNumber;
    //     operator = e.target.dataset.value;
    // } else if (count && result && secondNumber) {
        firstNumber = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = firstNumber;
        operator= e.target.dataset.value;
        result = 0;
        secondNumber = 0;
    }
    
}))
equalsTo.addEventListener("click", ()=> {
    result = operate(operator,firstNumber,secondNumber);
    showNumbers.textContent = result;
})




