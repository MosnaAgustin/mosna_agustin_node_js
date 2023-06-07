const prompt= require('prompt-sync')();
var a=parseInt(prompt("Introduzca un numero: "));

function numprimo(a){
    if (a==0 || a==1 || a==4)return false;
    for(let i=2;i<=a/2;i++){
         if(a%i==0)return false
    }
    return true;
}
console.log(numprimo(a));