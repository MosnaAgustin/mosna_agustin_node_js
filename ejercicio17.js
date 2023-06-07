const prompt= require('prompt-sync')();
var a=parseInt(prompt("Introduzca un numero: "));
var lista=new Array
function rango(a,lista){
    for(let i=1; i<=a;i++){
        {lista.push(i)}
    }
    console.log(lista)
}
console.log(rango(a,lista));