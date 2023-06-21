let firstNumber = 0;
let secondNumber = 0;
let operator = null;
let count = 0;
let result = 0;
let number= 0;
let value = 0;
let countPower = 0;
let sqr = 0;
let sin = 0;
let cos = 0;
let tan = 0;
const clear = document.querySelector("#clear")
const floatPoint = document.querySelector("#point")
const power = document.querySelector(".power")
const squareRoot= document.querySelector(".square-root")

squareRoot.addEventListener("click",(e)=> {
    if(e){
        sqr++
    }
    console.log(sqr)
})

function getSin(number){
    return Math.sin(number * Math.PI/180).toFixed(3)
}
function getCos(number){
    return Math.cos(number * Math.PI/180).toFixed(3)
}
function getTan(number){
    return Math.tan(number * Math.PI/180).toFixed(3)
}

function squareRootFunction(number){
    return (number ** (1/2))
}

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
function exponent(firstNumber, secondNumber) {
    return firstNumber ** secondNumber;
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
    } else if (operator == "**") {
        return exponent(firstNumber, secondNumber)
    }
}

power.addEventListener("click", (e)=> {
    if(!countPower){
        operator = "**";
        countPower++;
    } else if(countPower){
        firstNumber = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = firstNumber;
        operator = "**";
        secondNumber=0;
    } 
    
})




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

     if(!operator && firstNumber && !sqr && (!sin && !cos && !tan)){
        firstNumber += e.target.dataset.value;
        showNumbers.textContent = firstNumber;
    } else if(!operator && !firstNumber && !sqr && (!sin && !cos && !tan)){
        firstNumber = e.target.dataset.value;
        showNumbers.textContent = firstNumber;
    } else if(operator && !secondNumber && !sqr && (!sin && !cos && !tan)) {
        secondNumber = e.target.dataset.value;
        showNumbers.textContent = secondNumber;
    } else if(operator && secondNumber && !sqr && (!sin && !cos && !tan)) {
        secondNumber += e.target.dataset.value;
        showNumbers.textContent = secondNumber;
    } else if(sqr && !operator && !firstNumber){
        firstNumber = e.target.dataset.value;
        showNumbers.textContent = `√${(firstNumber)}`;
        firstNumber = squareRootFunction(firstNumber);
        sqr=0;
    } else if(sqr & !operator && firstNumber){
        firstNumber += e.target.dataset.value;
        showNumbers.textContent = `√${(firstNumber)}`
        firstNumber = squareRootFunction(firstNumber);
        sqr=0;
    }else if (sqr && operator && firstNumber) {
        secondNumber = e.target.dataset.value;
        showNumbers.textContent = `√${(secondNumber)}`;
        secondNumber = squareRootFunction(secondNumber);
        sqr=0;
    } else if (sqr && !operator && !secondNumber){
        secondNumber = e.target.dataset.value;
        showNumbers.textContent = `√${(secondNumber)}`;
        secondNumber = squareRootFunction(secondNumber);
    } else if(sin  && !operator && !firstNumber ){
        firstNumber = e.target.dataset.value;
        showNumbers.textContent = `sin(${firstNumber})`;
    } else if(sin  && !operator && firstNumber ){
        firstNumber += e.target.dataset.value;
        showNumbers.textContent = `sin(${firstNumber})`;
        firstNumber = getSin(firstNumber);
    } else if(sin  && operator && !secondNumber){
        secondNumber = e.target.dataset.value;
        showNumbers.textContent = `sin(${firstNumber})`;
    } else if(sin  && !operator && !firstNumber){
        secondNumber += e.target.dataset.value;
        showNumbers.textContent = `sin(${firstNumber})`;
        secondNumber = getSin(firstNumber);
    } else if(cos  && !operator && !firstNumber ){
        firstNumber = e.target.dataset.value;
        showNumbers.textContent = `cos(${firstNumber})`;
    } else if(cos && !operator && firstNumber ){
        firstNumber += e.target.dataset.value;
        showNumbers.textContent = `cos(${firstNumber})`;
        firstNumber = getCos(firstNumber);
    } else if(cos  && operator && !secondNumber){
        secondNumber = e.target.dataset.value;
        showNumbers.textContent = `cos(${firstNumber})`;
    } else if(cos  && !operator && !firstNumber){
        secondNumber += e.target.dataset.value;
        showNumbers.textContent = `cos(${firstNumber})`;
        secondNumber = getCos(firstNumber);
    } else if(tan  && !operator && !firstNumber ){
        firstNumber = e.target.dataset.value;
        showNumbers.textContent = `tan(${firstNumber})`;
    } else if(tan && !operator && firstNumber ){
        firstNumber += e.target.dataset.value;
        showNumbers.textContent = `tan(${firstNumber})`;
        firstNumber = getTan(firstNumber);
    } else if(tan  && operator && !secondNumber){
        secondNumber = e.target.dataset.value;
        showNumbers.textContent = `tan(${firstNumber})`;
    } else if(tan  && !operator && !firstNumber){
        secondNumber += e.target.dataset.value;
        showNumbers.textContent = `tan(${firstNumber})`;
        secondNumber = getTan(firstNumber);
    }
    
    console.log(`number ${number}`)
    console.log(`firstNumber ${firstNumber}`)
    console.log(`secondNumber ${secondNumber}`)
   

})) ;
operators.forEach(item => item.addEventListener("click", (e)=> {
    if (!count) {
        operator = e.target.dataset.value;
        count++;
        sin=0;
        cos = 0;
        tan= 0;
    }else if(count){
        firstNumber = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = firstNumber;
        operator = e.target.dataset.value;
        secondNumber=0;
    }  
}))
equalsTo.addEventListener("click", ()=> {
    if(!operator && !firstNumber){
        showNumbers.textContent = firstNumber;
    } else if(!operator && firstNumber){
        showNumbers.textContent = firstNumber;
    } else  if ((operator && !secondNumber && (sqr || (!sin && !cos && !tan)))){
        showNumbers.textContent = "Error";
        firstNumber = 0;
        secondNumber = 0;
    } else if(isFinite(firstNumber) && isFinite(secondNumber) && operator) {
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
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

const trigonometery = document.querySelectorAll(".trig")



trigonometery.forEach(item => item.addEventListener("click", (e)=>{
    if(e.target.textContent == "sin") {
        sin++
    } 
    else if(e.target.textContent === "cos") {
        cos++
    } else if(e.target.textContent === "tan" ) {
        tan++
    }
 
}))

// trigonometery.forEach(item => item.addEventListener("click", (e)=>{
//     if(e.target.textContent === "sin" && firstNumber) {
//         // showNumbers.textContent =  `${firstNumber} * sin(${number})`;
//         secondNumber = number//Math.sin(parseFloat(number));
//         // return secondNumber
//         // firstNumber = parseFloat(firstNumber);
//         // secondNumber = parseFloat(secondNumber);
//         // value = firstNumber * secondNumber;
//         // return value 
//         trig++;

//     } else if(e.target.textContent === "sin" && !firstNumber) {
//         trig++;
//         // showNumbers.textContent =  `sin(${number})`;
//         firstNumber = Math.sin(parseFloat(number));
//         // firstNumber = parseFloat(firstNumber);
//         // secondNumber = parseFloat(secondNumber);
//         // return firstNumber;
//     }
//     else if(e.target.textContent === "cos" && firstNumber) {
//         trig++;
//         // showNumbers.textContent =  `${firstNumber} * cos(${number})`;
//         secondNumber = Math.cos(parseFloat(number));
//         // firstNumber = parseFloat(firstNumber);
//         // secondNumber = parseFloat(secondNumber);
//         // value = firstNumber * secondNumber;
//         // return value;
//     } else if(e.target.textContent === "cos" && !firstNumber) {
//         trig++;
//         // showNumbers.textContent =  `cos(${number})`;
//         firstNumber = Math.cos(parseFloat(number));
//         // return firstNumber;
//     } else if(e.target.textContent === "tan" && firstNumber) {
//         trig++;
//         // showNumbers.textContent =  `${firstNumber} * tan(${number})`;
//         secondNumber = Math.tan(parseFloat(number));
//         // firstNumber = parseFloat(firstNumber);
//         // secondNumber = parseFloat(secondNumber);
//         // value = firstNumber * secondNumber;
//         // return value;
//     } else if(e.target.textContent === "tan" && !firstNumber) {
//         trig++;
//         // showNumbers.textContent =  `tan(${number})`;
//         firstNumber = parseFloat(firstNumber);
//         // return firstNumber;

//     }
 
// }))