const display = document.querySelector(".display")
const numbres = document.querySelectorAll("#num")
numbres.forEach(item => item.addEventListener("click", (e)=>{
    display.textContent = e.target.dataset.value;
}))

let a;
let b;
let operator;
/*
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
console.log(number())
function operate(operator,a,b){
    if (operator == '+'){
        return add(1,2)
    } else if (operator == '-'){
        return subtract(1,2)
    } else if (operator == '*'){
        return multiply(1,2)
    } else if (operator == '/'){
        return divide(1,2)
    }
}
function renderNumbers(){

}

const display = renderNumbers()*/