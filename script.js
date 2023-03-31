const upperDisplay=document.getElementById("upperDisplay");
const lowerDisplay=document.getElementById("lowerDisplay");
const buttons=document.querySelectorAll(".number");
const operators=document.querySelectorAll(".operator");
const equals=document.getElementById("equal");
const clear=document.getElementById("clear");
const eraser=document.getElementById("Backspace");
const onOff=document.querySelectorAll(".onOff");
let operator;
let num1="";
let num2="";
let round=1;
//setting the on and off button
onOff.forEach((on_off)=>{
    on_off.addEventListener("click", powers)
});

function powers(event){
    let onof=event.target.textContent;
    console.log(onof);
    if(onof==="OFF"){
        upperDisplay.innerText="";
        lowerDisplay.innerText="";
        buttons.forEach(button=>button.disabled=true);
        operators.forEach(operator=>operator.disabled=true);
        
    }
    else if(onof==="ON"){
        upperDisplay.disabled=false;
        lowerDisplay.disabled=false;
        buttons.forEach(button=>button.disabled=false);
        operators.forEach(operator=>operator.disabled=false);
    }
}
//setting the clear button
clear.addEventListener("click", ()=>{
    lowerDisplay.innerText="";
    upperDisplay.innerText="";
    num1="";
    num2="";
    operator="";
});
//settting the erase button
eraser.addEventListener("click", () => {
    if (lowerDisplay.innerText.length > 0) {
        //I used to slice function here to remove a character from a string
      lowerDisplay.innerText = lowerDisplay.innerText.slice(0, -1);
      lowerDisplay.innerText = lowerDisplay.innerText.replace(/\s+/g, '');
      num1+=lowerDisplay.innerText;
    } else if (upperDisplay.innerText.length > 0) {
        //I realised that after using the slice method, my num still remains a string
      upperDisplay.innerText = upperDisplay.innerText.slice(0, -1);
      upperDisplay.innerText = upperDisplay.innerText.replace(/\s+/g, '');
      num2+=upperDisplay.innerText;
    }
  });

//determine which button was clicked
buttons.forEach((button)=>{
    button.addEventListener("click", getData)});
//create the function to obtain the data
function getData(event) {
    let data ="";
    data= event.target.textContent;
    if (!/[\*\/+-]$/.test(data)) {
        if(!operator && data<=12){
            num1 += data;
            lowerDisplay.innerText = num1;
            console.log(num1);
        }
    } else if(operator &&data<=12){
        num2+=data;
        console.log(num2);
        lowerDisplay.innerText=num2;
    }
}

//declare the function for the operator
operators.forEach((operator)=>{
    operator.addEventListener("click", getOperator)
});
//create the function to get the operator
function getOperator(event){
    operator=event.target.textContent;
    if(num1.length<=12 && !num1.match(/[\/\*+\-]/)){
        upperDisplay.innerText=num1+operator;
        console.log(operator);
        lowerDisplay.innerText="";
        num2="";
    }
}

//define the event listener for the equal button
equals.addEventListener("click", performCalculation)

//create the function to perform the calculation
function performCalculation(){
    let results=0;
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