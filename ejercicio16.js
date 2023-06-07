const prompt= require('prompt-sync')();
var a=parseInt(prompt("Introduzca un numero inicial: "));
var b=parseInt(prompt("Introduzca un numero final: "));
var c=parseInt(prompt("Introduzca el numero sumador: "));
var lista=new Array
function rango(a,b,c,lista){
    for(let i=a; i<=b;i+=c){
        {lista.push(i)}
    }
    console.log(lista)
}
console.log(rango(a,b,c,lista));
