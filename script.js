const upperDisplay=document.getElementById("upperDisplay");
const lowerDisplay=document.getElementById("lowerDisplay");
const buttons=document.querySelectorAll(".number");
const operators=document.querySelectorAll(".operator");
const equals=document.getElementById("equal");
const clear=document.getElementById("clear");
const eraser=document.getElementById("Backspace");
const onOff=document.querySelectorAll(".onOff");
const period = document.getElementById("period");
let operator;
let num1="";
let num2="";
let round=1;
let results="";
const MAX_DISPLAY_LENGTH=12; //maximum number of digits to display
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
        operator="";
        num1="";
        num2="";
        buttons.forEach(button=>button.disabled=true);
        operators.forEach(operator=>operator.disabled=true);
        
    }
    else if(onof==="ON"){
        operator="";
        upperDisplay.disabled=false;
        lowerDisplay.disabled=false;
        buttons.forEach(button=>button.disabled=false);
        operators.forEach(operator=>operator.disabled=false);
    }
}
period.addEventListener("click", getPeriod);
function getPeriod() {
    if (results && !results.toString().includes(".")){
        num1=results+=".";
        console.log(num1);
        lowerDisplay.innerText=num1;
        num2="";
    }
    else if (operator && !num2.includes(".") && !results) {
        num2 += ".";
        lowerDisplay.innerText = num2;
    }
    else if(!num1.includes(".") && !results) {
        num1 += ".";
        lowerDisplay.innerText = num1;
    } 
}
      
  
//setting the clear button
clear.addEventListener("click", ()=>{
    lowerDisplay.innerText="";
    upperDisplay.innerText="";
    num1="";
    num2="";
    operator="";
    results="";
});
//settting the erase button
eraser.addEventListener("click", () => {
    if (lowerDisplay.innerText.length > 0) {
        //I used to slice function here to remove a character from a string
      lowerDisplay.innerText = lowerDisplay.innerText.slice(0, -1);
      num1 = num1.slice(0, -1);
    } 
  });
let check=false;
let initialSecondNum=false;
let resultsChecked=false;
//determine which button was clicked
buttons.forEach((button)=>{
    button.addEventListener("click", getData)});
//create the function to obtain the data
function getData(event) {
    let data ="";
    data= event.target.textContent;
        if(!operator){
            if(data.length<MAX_DISPLAY_LENGTH){
            num1+=data;
            lowerDisplay.innerText = num1;
            console.log(num1);
             check=true;
            }
            else{
                return;
            }
        }
         else if(check && !results && !resultsChecked){
            if(num2.length<MAX_DISPLAY_LENGTH)
            num2 += data;
            console.log(num2);
            lowerDisplay.innerText=num2;
            initialSecondNum=true;
        }
        else if(resultsChecked && initialSecondNum && results.length===0){
            num2=data;
            lowerDisplay.innerText=num2;
            console.log(num2);
        }
        else if(results){
            results+=data;
            num1=results;
            lowerDisplay.innerText=num1;
            console.log(num1);
            
        }
    }
//declare the function for the operator
operators.forEach((operator)=>{
    operator.addEventListener("click", getOperator)
});
//create the function to get the operator
function getOperator(event){
    operator=event.target.textContent;
    if(num1.length>0 && num2.length===0){
        upperDisplay.innerText=num1+operator;
        console.log(operator);
        lowerDisplay.innerText="";
        num2="";
    }
    else if(num1.length===0){
        num1=0;
        console.log(num1);
        check=true;
        upperDisplay.innerText=num1+operator;
        console.log(operator);
        lowerDisplay.innerText="";
        num2="";
    }
    else if(results){
        num1=results;
        upperDisplay.innerText=num1+operator;
        num2="";
        results="";
        lowerDisplay.innerText="";
        resultsChecked=true;
    }
}

//define the event listener for the equal button
equals.addEventListener("click", performCalculation)

//create the function to perform the calculation
function performCalculation(){
    if(!results){
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
        if(results.toString().length>12){
            results=results.toExponential(12);
        }
        console.log(results);
        lowerDisplay.innerText=results;
    }
    else if(results){
        num2=results;
        results="";
        upperDisplay.innerText=num1+operator+num2;
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
        lowerDisplay.innerText=results;
    }
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