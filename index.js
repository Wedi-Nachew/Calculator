let a=0;
let b=0;
let operator;
let count = 0;

const numberClicked = document.querySelector("#clicked")
const numbres = document.querySelectorAll("#num")
const operators = document.querySelectorAll(".operator")

 numbres.forEach(item => item.addEventListener("click", (e)=> {
    let number = e.target.dataset.value;
    numberClicked.textContent = number;
    a = numberClicked.textContent;
})) ;

operators.forEach(item => item.addEventListener("click", (e)=> {
    operator = e.target.dataset.value;
    console.log(`${operator} got clicked`)
}))




function add(a,b){
    return a+b
}
function subtract(a,b){
    return a-b
} 
function multiply(a,b){
    return a*b 
}
function divide(a,b){
    return a/b
}
function operate(operator,a,b){
    if (operator == '+'){
        return add(a,b)
    } else if (operator == '-'){
        return subtract(1,2)
    } else if (operator == '*'){
        return multiply(1,2)
    } else if (operator == '/'){
        return divide(1,2)
    }
}
/*
function renderNumbers(){

}

const display = renderNumbers()*/