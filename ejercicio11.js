const prompt= require('prompt-sync')();
var num=parseInt(prompt("Introduzca un numero: "));
var num2=parseInt(prompt("Introduzca otro numero: "));
var num3=parseInt(prompt("Introduzca el ultimo numero: "));
function operadoreslogicos(num, num2, num3){
   
   if (num<=-1 && num2<=-1 && num3<=-1){
    console.log("Hay negativos");}
   if (num>num2 && num>num3 && num>=1){
    console.log ("Número 1 es mayor y positivo");}
   if (num3>num && num3>num2 && num3>=1){
    console.log (num3+1);}
   if (num==0 && num2==0 && num3==0){
    console.log("Error");} 
 else console.log ("false");  
};

console.log(operadoreslogicos(num, num2,num3));