function startCalculator(){
    console.log("Calculating");
    let num1 = Number(prompt("Enter number 1:"));
    let op = prompt("Enter an Operation + - * /");
    let num2 = Number (prompt("Enter number 2:"));
    console.log(num1,num2);

    sum(num1,num2);
    subs(num1.num2);
    mult(num1,num2);
    div(num1,num2);

    
}
function sum(a,b){
    document.getElementById("results").innerHTML=`<p> ${a} + ${b} = ${a+b}</p>`;
}
function subs(a,b){
    document.getElementById("results").innerHTML=`<p> ${a} - ${b} = ${a-b}</p>`;
}
function mult(a,b){
        document.getElementById("results").innerHTML=`<p> ${a} * ${b} = ${a*b}</p>`;
}
function div(a,b){
    document.getElementById("results").innerHTML=`<p> ${a} / ${b} = ${a/b}</p>`;
}
