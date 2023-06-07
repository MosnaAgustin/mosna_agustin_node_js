const prompt= require('prompt-sync')();
var a=parseInt(prompt("Introduzca un numero: "));
function esPrimo(a){
    let i=1;
    while(a%++i!=0);
    return a==i;
}
console.log(esPrimo(a));