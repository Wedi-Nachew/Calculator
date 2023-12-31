const clear = document.querySelector("#clear");
const floatPoint = document.querySelector("#point");
const power = document.querySelector(".power");
const squareRoot= document.querySelector(".square-root");
const trigonometery = document.querySelectorAll(".trig");
const negation = document.querySelector("#negation");
const showClac = document.querySelector("#show-calc");
const showNumbers = document.querySelector("#show-numbers")
const getNumber = document.querySelectorAll("#num")
const operators = document.querySelectorAll(".operator")
const equalsTo  = document.querySelector("#equals-to")
const backspace = document.querySelector("#backspace")
showNumbers.textContent = 0;

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


trigonometery.forEach(item => item.addEventListener("click", (e)=>{
    if(e.target.textContent == "sin" && !sqr) {
        sin=1;
        showNumbers.textContent = "sin()";
    } else if(e.target.textContent == "sin" && sqr) {
        sqr++;
        sin=1;
        showNumbers.textContent = "√(sin())";
    } else if(e.target.textContent === "cos" && !sqr) {
        cos=1;
        showNumbers.textContent = "cos()";
    } else if(e.target.textContent === "cos" && sqr) {
        cos=1;
        sqr++;
        showNumbers.textContent = "√(cos())";
    }
     else if(e.target.textContent === "tan" && !sqr) {
        tan=1;
        showNumbers.textContent = "tan()";
    } else if(e.target.textContent === "tan" && sqr){
        tan=1;
        sqr++;
        showNumbers.textContent = "√(tan())";
    }

    console.log(`firstNumber: ${firstNumber}`)
    console.log(`secondNumber: ${secondNumber}`)
    console.log(`operator: ${operator}`)
    console.log(`sqr: ${sqr}`)
    console.log(`sin: ${sin}`)
    console.log(`cos: ${cos}`)
    console.log(`tan: ${tan}`)
    console.log(`count: ${count}`)
}))

squareRoot.addEventListener("click",(e)=> {
   
    if (sin) {
        showNumbers.textContent = `sin(√())`;
        sqr=1;
        sin++;
    }  else if (cos) {
        showNumbers.textContent = `cos(√())`;
        sqr=1;
        cos++;
    } else if (tan) {
        showNumbers.textContent = `tan(√())`;
        sqr=1;
        tan++;
    }  else if (e){
        showNumbers.textContent = `√()`
        sqr=1; 
    }
    console.log(`firstNumber: ${firstNumber}`)
    console.log(`secondNumber: ${secondNumber}`)
    console.log(`operator: ${operator}`)
    console.log(`sqr: ${sqr}`)
    console.log(`sin: ${sin}`)
    console.log(`cos: ${cos}`)
    console.log(`tan: ${tan}`)
    console.log(`count: ${count}`)
})

function getSin(number){
    number = parseFloat(number);
    return Math.sin(number * Math.PI/180).toFixed(3)
}
function getCos(number){
    number = parseFloat(number);
    return Math.cos(number * Math.PI/180).toFixed(3)
}
function getTan(number){
    number = parseFloat(number);
    return Math.tan(number * Math.PI/180).toFixed(3)
}

function squareRootFunction(number){
    number = parseFloat(number);
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
        showClac.textContent = `${firstNumber} ^`
    } else if(countPower){
        firstNumber = operate(operator,firstNumber,secondNumber);
        operator = "**";
        showClac.textContent += `${secondNumber} = `
        showNumbers.textContent = firstNumber;
        secondNumber=0;
        countPower=0;
    } 
    
})

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
    } else if(sqr>1 && !operator && !firstNumber && (sin==1)){
        firstNumber = e.target.dataset.value;
        showNumbers.textContent = `√(sin(${(firstNumber)}))`;
    } else if(sqr>1 & !operator && firstNumber && (sin==1)) {
        firstNumber += e.target.dataset.value;
        showNumbers.textContent = `√(sin(${(firstNumber)}))`
    } else if (sqr>1 && operator && !secondNumber && (sin==1)) {
        secondNumber = e.target.dataset.value;
        showNumbers.textContent = `√(sin(${(secondNumber)}))`;
    } else if (sqr>1 && operator && secondNumber && (sin==1)){
        secondNumber += e.target.dataset.value;
        showNumbers.textContent = `√(sin(${(secondNumber)}))`;
    } else if(sqr>1 && !operator && !firstNumber && (cos==1)){
        firstNumber = e.target.dataset.value;
        showNumbers.textContent = `√(cos(${(firstNumber)}))`;
    } else if(sqr>1 & !operator && firstNumber && (cos==1)) {
        firstNumber += e.target.dataset.value;
        showNumbers.textContent = `√(cos(${(firstNumber)}))`
    } else if (sqr>1 && operator && !secondNumber && (cos==1)) {
        secondNumber = e.target.dataset.value;
        showNumbers.textContent = `√(cos(${(secondNumber)}))`;
    } else if (sqr>1 && operator && secondNumber && (cos==1)){
        secondNumber += e.target.dataset.value;
        showNumbers.textContent = `√(cos(${(secondNumber)}))`;
    }else if(sqr>1 && !operator && !firstNumber && (tan==1)){
        firstNumber = e.target.dataset.value;
        showNumbers.textContent = `√(tan(${(firstNumber)}))`;
    } else if(sqr>1 & !operator && firstNumber && (tan==1)) {
        firstNumber += e.target.dataset.value;
        showNumbers.textContent = `√(tan(${(firstNumber)}))`
    } else if (sqr>1 && operator && !secondNumber && (tan==1)) {
        secondNumber = e.target.dataset.value;
        showNumbers.textContent = `√(tan(${(secondNumber)}))`;
    } else if (sqr>1 && operator && secondNumber && (tan==1)){
        secondNumber += e.target.dataset.value;
        showNumbers.textContent = `√(tan(${(secondNumber)}))`;
    } else if(sqr==1 && !operator && !firstNumber && sin>1){
        firstNumber = e.target.dataset.value;
        showNumbers.textContent = `sin(√(${(firstNumber)}))`;
    } else if(sqr==1 & !operator && firstNumber && sin>1) {
        firstNumber += e.target.dataset.value;
        showNumbers.textContent = `sin(√(${(firstNumber)}))`;
    } else if (sqr==1 && operator && !secondNumber && sin>1) {
        secondNumber = e.target.dataset.value;
        showNumbers.textContent = `sin(√(${(secondNumber)}))`;
    } else if (sqr==1 && operator && secondNumber && sin>1){
        secondNumber += e.target.dataset.value;
        showNumbers.textContent = `sin(√(${(secondNumber)}))`;
    } else if(sqr==1 && !operator && !firstNumber && cos>1){
        firstNumber = e.target.dataset.value;
        showNumbers.textContent = `cos(√(${(firstNumber)}))`;
    } else if(sqr==1 & !operator && firstNumber && cos>1) {
        firstNumber += e.target.dataset.value;
        showNumbers.textContent = `cos(√(${(firstNumber)}))`
    } else if (sqr==1 && operator && !secondNumber && cos>1) {
        secondNumber = e.target.dataset.value;
        showNumbers.textContent = `cos(√(${(secondNumber)}))`;
    } else if (sqr==1 && operator && secondNumber && cos>1){
        secondNumber += e.target.dataset.value;
        showNumbers.textContent = `cos(√(${(secondNumber)}))`;
    }else if(sqr==1 && !operator && !firstNumber && tan>1){
        firstNumber = e.target.dataset.value;
        showNumbers.textContent = `tan(√(${(firstNumber)}))`;
    } else if(sqr==1 & !operator && firstNumber && tan>1) {
        firstNumber += e.target.dataset.value;
        showNumbers.textContent = `tan(√(${(firstNumber)}))`
    } else if (sqr==1 && operator && !secondNumber && tan>1) {
        secondNumber = e.target.dataset.value;
        showNumbers.textContent = `tan(√(${(secondNumber)}))`;
    } else if (sqr==1 && operator && secondNumber && tan>1){
        secondNumber += e.target.dataset.value;
        showNumbers.textContent = `tan(√(${(secondNumber)}))`;
    }else if(sqr==1 && !operator && !firstNumber && (!sin && !cos && !tan) ){
        firstNumber = e.target.dataset.value;
        showNumbers.textContent = `√(${(firstNumber)})`;
    } else if(sqr==1 && !operator && firstNumber && (!sin && !cos && !tan)){
        firstNumber += e.target.dataset.value;
        showNumbers.textContent = `√(${(firstNumber)})`;
    }else if (sqr==1 && operator && !secondNumber && (!sin && !cos && !tan)) {
        secondNumber = e.target.dataset.value;
        showNumbers.textContent = `√(${(secondNumber)})`;
    } else if (sqr==1 && operator && secondNumber && (!sin && !cos && !tan)){
        secondNumber += e.target.dataset.value;
        showNumbers.textContent = `√(${(secondNumber)})`;
    } else if(sin  && !operator && !firstNumber && !sqr){
        firstNumber = e.target.dataset.value;
        showNumbers.textContent = `sin(${firstNumber})`;
    } else if(sin  && !operator && firstNumber && !sqr){
        firstNumber += e.target.dataset.value;
        showNumbers.textContent = `sin(${firstNumber})`;
    } else if(sin  && operator && !secondNumber && !sqr){
        secondNumber = e.target.dataset.value;
        showNumbers.textContent = `sin(${secondNumber})`;
    } else if(sin  && operator && secondNumber && !sqr){
        secondNumber += e.target.dataset.value;
        showNumbers.textContent = `sin(${secondNumber})`;
    } else if(cos  && !operator && !firstNumber && !sqr){
        firstNumber = e.target.dataset.value;
        showNumbers.textContent = `cos(${firstNumber})`;
    } else if(cos && !operator && firstNumber && !sqr){
        firstNumber += e.target.dataset.value;
        showNumbers.textContent = `cos(${firstNumber})`;
    } else if(cos  && operator && !secondNumber && !sqr){
        secondNumber = e.target.dataset.value;
        showNumbers.textContent = `cos(${secondNumber})`;
    } else if(cos  && operator && secondNumber && !sqr){
        secondNumber += e.target.dataset.value;
        showNumbers.textContent = `cos(${secondNumber})`;
    } else if(tan  && !operator && !firstNumber && !sqr ){
        firstNumber = e.target.dataset.value;
        showNumbers.textContent = `tan(${firstNumber})`;
    } else if(tan    && !operator && firstNumber && !sqr){
        firstNumber += e.target.dataset.value;
        showNumbers.textContent = `tan(${firstNumber})`;
    } else if(tan  && operator && !secondNumber && !sqr){
        secondNumber = e.target.dataset.value;
        showNumbers.textContent = `tan(${secondNumber})`;
    } else if(tan  && operator && secondNumber&& !sqr){
        secondNumber += e.target.dataset.value;
        showNumbers.textContent = `tan(${secondNumber})`;
    }
    console.log(`firstNumber: ${firstNumber}`)
    console.log(`secondNumber: ${secondNumber}`)
    console.log(`operator: ${operator}`)
    console.log(`sqr: ${sqr}`)
    console.log(`sin: ${sin}`)
    console.log(`cos: ${cos}`)
    console.log(`tan: ${tan}`)
    console.log(`count: ${count}`)
})) ;
operators.forEach(item => item.addEventListener("click", (e)=> {
    if(count && !sqr && (!sin && !cos && !tan) ){
        secondNumber = secondNumber;
        firstNumber = operate (operator,firstNumber,secondNumber);
        showNumbers.textContent = firstNumber;
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        secondNumber=0;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
    }else if(sqr && operator &&  firstNumber  &&  (!sin && !cos && !tan) && count){
        secondNumber = squareRootFunction(secondNumber);
        firstNumber = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = firstNumber;
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        secondNumber=0;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
    } else  if(!operator && !firstNumber && !sqr && (!sin && !cos && !tan) && !count){
        firstNumber = firstNumber;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        count++;
    } else if(!operator && firstNumber && !sqr && (!sin && !cos && !tan) && !count){
        firstNumber = firstNumber;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        count++;
    } else if(sqr>1 && !operator && firstNumber && (sin==1) && !count) {
        operator = e.target.dataset.value;
        showClac.textContent = `√(sin(${firstNumber}))   ${operator} `;
        firstNumber = squareRootFunction(getSin( firstNumber));
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++;
    } else if(sqr>1 && !operator && firstNumber && (cos==1) && !count) {
        operator = e.target.dataset.value;
        showClac.textContent = `√(cos(${firstNumber}))   ${operator} `;
        firstNumber = squareRootFunction(getCos( firstNumber));
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++;
    } else if(sqr>1 && !operator && firstNumber && (tan==1) && !count) {
        operator = e.target.dataset.value;
        showClac.textContent = `√(tan(${firstNumber}))    ${operator} `;
        firstNumber = squareRootFunction(getTan( firstNumber));
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++;
    } else if(sqr==1 && !operator && firstNumber && sin>1 && !count) {
        operator = e.target.dataset.value;
        showClac.textContent = `sin(√(${firstNumber}))    ${operator} `;
        firstNumber = getSin(squareRootFunction( firstNumber));
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++;
    } else if(sqr==1 && !operator && firstNumber && cos>1 && !count) {
        operator = e.target.dataset.value;
        showClac.textContent = `cos(√(${firstNumber}))   ${operator} `;
        firstNumber = getCos(squareRootFunction( firstNumber));
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++; //added count++
    } else if(sqr==1 && !operator && firstNumber && tan>1 && !count) {
        operator = e.target.dataset.value;
        showClac.textContent = `tan(√(${firstNumber}))   ${operator} `;
        firstNumber = getTan(squareRootFunction( firstNumber));
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++;
    } else if(sqr==1 && !operator && firstNumber && 
        (!sin && !cos && !tan) &&!count){
        operator = e.target.dataset.value;
        showClac.textContent = `√(${firstNumber})   ${operator} `;
        firstNumber = squareRootFunction(firstNumber);
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++;
    } else if(sin && !operator && firstNumber && !count){
        operator = e.target.dataset.value;
        showClac.textContent = `sin(${firstNumber})   ${operator} `;
        firstNumber = getSin(firstNumber);
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++;
    } else if(cos && !operator && firstNumber && !count){
        operator = e.target.dataset.value;
        showClac.textContent = `cos(${firstNumber})   ${operator} `;
        firstNumber = getCos(firstNumber);
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++;
    } else if(tan && !operator && firstNumber && !count){
        operator = e.target.dataset.value;
        showClac.textContent = `tan(${firstNumber})   ${operator} `;
        firstNumber = getTan(firstNumber);
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++;
    } else if (!count && operator && !sqr) {
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        count++;
        sin=0;
        cos = 0;
        tan= 0;
        sqr=0;
    } 

    else if(sqr>1 && operator && firstNumber && (sin==1) && count && !cos) {
        secondNumber = squareRootFunction(getSin(secondNumber));
        firstNumber = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = firstNumber;
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        secondNumber=0;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++;
    } else if(sqr>1 && operator && firstNumber && (cos==1) && count && !sin) {
        secondNumber = squareRootFunction(getCos(secondNumber));
        firstNumber = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = firstNumber;
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        secondNumber=0;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++;
        count++;
    } else if(sqr>1 && operator && firstNumber && (tan==1) && count && !sin) {
        secondNumber = squareRootFunction(getTan(secondNumber));
        firstNumber = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = firstNumber;
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        secondNumber=0;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++;
    } else if(sqr==1 && operator && firstNumber && sin>1 && count) {
        secondNumber = getSin(squareRootFunction(secondNumber));
        firstNumber = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = firstNumber;
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        secondNumber=0;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++;
    } else if(sqr==1 && operator && firstNumber && cos>1 && count) {
        secondNumber = getCos(squareRootFunction(secondNumber));
        firstNumber = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = firstNumber;
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        secondNumber=0;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++;//added count++
    } else if(sqr==1 && operator && firstNumber && tan>1 && count) {
        secondNumber = getTan(squareRootFunction(secondNumber));
        firstNumber = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = firstNumber;
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        secondNumber=0;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++;
    } else if(sqr==1 && operator && firstNumber && 
        (!sin && !cos && !tan) && count){
        firstNumber = squareRootFunction(firstNumber);
        operator = e.target.dataset.value;
        showClac.textContent = `√(${firstNumber})   ${operator} `;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++;
    } else if(sin && operator && secondNumber && !sqr ){
        secondNumber = getSin(secondNumber);
        firstNumber = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = firstNumber;
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        secondNumber=0;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
    } else if(cos && operator && secondNumber && !sqr){
        secondNumber = getCos(secondNumber);
        firstNumber = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = firstNumber;
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        secondNumber=0;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
    } else if(tan && operator && secondNumber && !sqr){
        secondNumber = getTan(secondNumber);
        firstNumber = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = firstNumber;
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        secondNumber=0;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
    }
    console.log(`firstNumber: ${firstNumber}`)
    console.log(`secondNumber: ${secondNumber}`)
    console.log(`operator: ${operator}`)
    console.log(`sqr: ${sqr}`)
    console.log(`sin: ${sin}`)
    console.log(`cos: ${cos}`)
    console.log(`tan: ${tan}`)
    console.log(`count: ${count}`)
}))
equalsTo.addEventListener("click", ()=> {
    if(operator && (!secondNumber || secondNumber) && !sqr && (!sin && !cos && !tan)){
        showClac.textContent += `${secondNumber} =`;
        secondNumber=secondNumber;
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
    }
    else if(sqr>1 && !operator && firstNumber && (sin==1)) {
        firstNumber = squareRootFunction(getSin( firstNumber));
        showNumbers.textContent = firstNumber;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        firstNumber=0;
    } else if (sqr>1 && operator && secondNumber && (sin==1)){
        showClac.textContent += `√(sin(${secondNumber})) =`;
        secondNumber = squareRootFunction(getSin( secondNumber));
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
    } else if(sqr>1 && !operator && firstNumber && (cos==1)) {
        firstNumber = squareRootFunction(getCos( firstNumber));
        showNumbers.textContent = firstNumber;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        firstNumber=0;
    } else if (sqr>1 && operator && secondNumber && (cos==1)){
        showClac.textContent += `√(cos(${secondNumber})) =`; 
        secondNumber = squareRootFunction(getCos( secondNumber));
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
    } else if(sqr>1 && !operator && firstNumber && (tan==1)) {
        firstNumber = squareRootFunction(getTan( firstNumber));
        showNumbers.textContent = firstNumber;
        showClac.textContent += `${secondNumber} =`;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        firstNumber=0;
    }else if (sqr>1 && operator && secondNumber && (tan==1)){
        showClac.textContent += `√(tan(${secondNumber})) =`;
        secondNumber = squareRootFunction(getTan( secondNumber));
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
    } else if(sqr==1 && !operator && firstNumber && sin>1) {
        firstNumber = getSin(squareRootFunction( firstNumber));
        showNumbers.textContent = firstNumber;
        showClac.textContent += `${secondNumber} =`;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        firstNumber=0;
    } else if(sqr==1 && operator && secondNumber && sin>1) {
        showClac.textContent += `sin(√(${secondNumber})) =`;
        secondNumber = getSin(squareRootFunction( secondNumber));
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
    } else if(sqr==1 && !operator && firstNumber && cos>1) {
        firstNumber = getCos(squareRootFunction( firstNumber));
        showNumbers.textContent = firstNumber;
        showClac.textContent += `${secondNumber} =`;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        firstNumber=0;
    } else if(sqr==1 && operator && secondNumber && cos>1) {
        showClac.textContent += `cos(√(${secondNumber})) =`;
        secondNumber = getCos(squareRootFunction( secondNumber));
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
    } else if(sqr==1 && !operator && firstNumber && tan>1) {
        firstNumber = getTan(squareRootFunction( firstNumber));
        showNumbers.textContent = firstNumber;
        showClac.textContent += `${secondNumber} =`;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        firstNumber=0;
    } else if(sqr==1 && operator && secondNumber && tan>1) {
        showClac.textContent += `tan(√(${secondNumber})) =`;
        secondNumber = getTan(squareRootFunction( secondNumber));
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
    } else if(sqr==1 && !operator && firstNumber && (!sin && !cos && !tan)){
        firstNumber = squareRootFunction(firstNumber);
        showNumbers.textContent = firstNumber;
        showClac.textContent += `${secondNumber} =`;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        firstNumber=0;
    } else if(sqr==1 && operator && secondNumber && (!sin && !cos && !tan)){
        showClac.textContent += `√(${secondNumber}) =`;
        secondNumber = squareRootFunction(secondNumber);
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
    } else if(sin && !operator && firstNumber ){
        firstNumber = getSin(firstNumber);
        showNumbers.textContent = firstNumber;
        showClac.textContent += `${secondNumber} =`;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        firstNumber = 0;
    } else if(sin && operator && secondNumber ){
        showClac.textContent += `sin(${secondNumber}) =`;
        secondNumber = getSin(secondNumber);
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
    } else if(cos && !operator && firstNumber ){
        firstNumber = getCos(firstNumber);
        showNumbers.textContent = firstNumber;
        showClac.textContent += `${secondNumber} =`;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        firstNumber = 0;
    } else if(cos && operator && secondNumber ){
        showClac.textContent += `cos(${secondNumber}) =`;
        secondNumber = getCos(secondNumber);
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
    } else if(tan && !operator && firstNumber ){
        firstNumber = getTan(firstNumber);
        showNumbers.textContent = firstNumber;
        showClac.textContent += `${secondNumber} =`;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        firstNumber = 0;
    } else if(tan && operator && secondNumber ){
        showClac.textContent += `tan(${secondNumber}) =`;
        secondNumber = getTan(secondNumber);
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        firstNumber = 0;
    } else if(sqr>1 && operator && firstNumber && (sin==1)) {
        secondNumber = squareRootFunction(getSin(secondNumber));
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++;
    } else if(sqr>1 && operator && firstNumber && (cos==1)) {
        secondNumber = squareRootFunction(getCos(secondNumber));
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++
    } else if(sqr>1 && operator && firstNumber && (tan==1)) {
        secondNumber = squareRootFunction(getTan(secondNumber));
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++
    } else if(sqr==1 && operator && firstNumber && sin>1) {
        secondNumber = getSin(squareRootFunction(secondNumber));
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++
    } else if(sqr==1 && operator && firstNumber && cos>1) {
        secondNumber = getCos(squareRootFunction(secondNumber));
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++//added count++
    } else if(sqr==1 && operator && firstNumber && tan>1) {
        secondNumber = getTan(squareRootFunction(secondNumber));
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
        operator = e.target.dataset.value;
        showClac.textContent = `${firstNumber}   ${operator} `;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++
    } /*else if(sqr==1 && operator && firstNumber && 
        (!sin && !cos && !tan) && count){
        firstNumber = squareRootFunction(firstNumber);
        operator = e.target.dataset.value;
        showClac.textContent = `√(${firstNumber})   ${operator} `;
        sqr = 0;
        sin = 0;
        cos = 0;
        tan = 0;
        count++;
    }*/
    
    else if(isFinite(firstNumber) && isFinite(secondNumber) && operator ) {
        result = operate(operator,firstNumber,secondNumber);
        showNumbers.textContent = result;
        showClac.textContent += `${secondNumber} =`;
    } 

    console.log(`firstNumber: ${firstNumber}`)
    console.log(`secondNumber: ${secondNumber}`)
    console.log(`operator: ${operator}`)
    console.log(`sqr: ${sqr}`)
    console.log(`sin: ${sin}`)
    console.log(`cos: ${cos}`)
    console.log(`tan: ${tan}`)
    console.log(`count: ${count}`)

})

clear.addEventListener("click", () =>{
    firstNumber = 0;
    secondNumber = 0;
    showNumbers.textContent = 0;
    showClac.textContent  = "";
    sqr = 0;
    sin = 0;
    cos = 0;
    tan = 0;
    count=0;
})

floatPoint.addEventListener("click", ()=> {
    if(!operator && !Boolean(firstNumber.includes("."))) {
        firstNumber += ".";
        showNumbers.textContent = firstNumber;
    } else if(!operator && Boolean(firstNumber.includes("."))){
        showNumbers.textContent = firstNumber;
    } else if(operator && !Boolean(secondNumber.includes("."))) {
        secondNumber += ".";
        showNumbers.textContent = secondNumber;
    } else if(operator && Boolean(secondNumber.includes("."))){
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



negation.addEventListener("click", (e)=> {
    if(!operator) {
        firstNumber = -firstNumber;
        showNumbers.textContent = firstNumber;
    }else if(operator) {
        secondNumber = -secondNumber;
        showNumbers.textContent = secondNumber;
    }
})

