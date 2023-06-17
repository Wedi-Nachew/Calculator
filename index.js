let firstNumber = null;
let secondNumber = null;
let operator = null;
let count = 0;

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
        return subtract(a,b)
    } else if (operator == '*'){
        return multiply(a,b)
    } else if (operator == '/'){
        return divide(a,b)
    }
}

const numberClicked = document.querySelector("#clicked")
const numbres = document.querySelectorAll("#num")
const operators = document.querySelectorAll(".operator")
const equalsTo  = document.querySelector("#equals-to")

function getNumber(){
    numbres.forEach(number => number.addEventListener("click", ()=>{
        if()
    }))
}

//  numbres.forEach(item => item.addEventListener("click", (e)=> {
//     let number = e.target.dataset.value;
//     numberClicked.textContent = number;
//     if(operator === null) {
//         a = number
//     } else {
//         b = number
//     }
//     console.log(a);
//     console.log(b);
//     operators.forEach(item => item.addEventListener("click", (e)=> {
//         operator = item.textContent;
//         console.log(operator)
//         equalsTo.addEventListener("click", ()=> {
//             if (operator == '+'){
//                 return a+b
//             } else if (operator == '-'){
//                 return subtract(a,b)
//             } else if (operator == '*'){
//                 return multiply(a,b)
//             } else if (operator == '/'){
//                 return divide(a,b)
//             }
//         })
//     }))
// })) ;






/*
function renderNumbers(){

}

const display = renderNumbers()*/