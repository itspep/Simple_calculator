const upperDisplay=document.getElementById("upperDisplay");
const lowerDisplay=document.getElementById("lowerDisplay");
const buttons=document.querySelectorAll(".number");
const operators=document.querySelectorAll(".operator");
const equals=document.getElementById("equal");
let operator;
let num1="";
let num2="";
let round=1;

//checking my displays



//determine which button was clicked
buttons.forEach((button)=>{
    button.addEventListener("click", getData)});
//create the function to obtain the data
function getData(event) {
    let data = event.target.textContent;
    if (!operator) {
      // if no operator has been selected yet, add to num1
      num1 += data;
      lowerDisplay.innerText = num1;
    } else {
      // if an operator has been selected, add to num2
      num2 += data;
      lowerDisplay.innerText = num2;
    }
  }

//declare the function for the operator
operators.forEach((operator)=>{
    operator.addEventListener("click", getOperator)
});
//create the function to get the operator
function getOperator(event){
    operator=event.target.textContent;
    console.log(operator);
    upperDisplay.innerText=num1+operator;
    lowerDisplay.innerText="";
}

//define the event listener for the equal button
equals.addEventListener("click", performCalculation)

//create the function to perform the calculation
function performCalculation(){
    let results;
    switch (operator){
        case '+':
            results= add(num1, num2);
         break;
        case '-':
            results=minus(num1, num2);
         break;
        case '/':
            results= divide(num1, num2);
         break;
        case '*':
            results= times(num1, num2);
         break;
    }
    resetDisplay(num1, num2, operator);
    lowerDisplay.innerText=results;
}
function resetDisplay(num1, num2, operator) {
    upperDisplay.innerText = num1+operator+num2;
  }
  

//define the functions for the various calcuations
function add(num1, num2){
    return parseFloat(num1)+parseFloat(num2);
}
//create  the function for the subtraction
function minus(num1, num2){
    return parseFloat(num1)-parseFloat(num2);
}
//create the multiplication function
function times(num1, num2){
    return parseFloat(num1)*parseFloat(num2);
}
//create the division function
function divide(num1, num2){
    return parseFloat(num1)/parseFloat(num2);
}