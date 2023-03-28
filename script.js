const upperDisplay=document.getElementById("upperDisplay");
const lowerDisplay=document.getElementById("lowerDisplay");
const buttons=document.querySelectorAll(".number");
let operator;
let num1="";
let num2="";
let round=1;

//checking my displays



//determine which button was clicked
buttons.forEach((button)=>{
    button.addEventListener("click", getData)});
//create the function to obtain the dat

function getData(event){
    
        let data="";
        data=event.target.textContent;
        console.log(data);
        lowerDisplay.innerText=data;
        upperDisplay.innerText=data;
}

function add(num1, num2){
    return num1+num2;
}
//create  the function for the subtraction
function minus(num1, num2){
    return num1-num2;
}
//create the multiplication function
function times(num1, num2){
    return num1*num2;
}
//create the division function
function divide(num1, num2){
    return num1/num2;
}


function operate(num1, num2, operate){

}