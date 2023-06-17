let a=null;
let b=null;
let operator=null;
let count = 0;

const numberClicked = document.querySelector("#clicked")
const numbres = document.querySelectorAll("#num")
const operators = document.querySelectorAll(".operator")
const equalsTo  = document.querySelector("#equals-to")

 numbres.forEach(item => item.addEventListener("click", (e)=> {
    let number = e.target.dataset.value;
    numberClicked.textContent = number;
    if(operator === null) {
        a = number
    } else {
        b = number
    }
})) ;

operators.forEach(item => item.addEventListener("click", (e)=> {
    operator = e.target.dataset.value;
}))

equalsTo.addEventListener("click", (operator)=> {
    console.log("eqauls to")
})




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