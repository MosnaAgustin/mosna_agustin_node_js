const prompt= require('prompt-sync')();
var a=parseInt(prompt("Introduzca un numero: "));
var b=parseInt(prompt("Introduzca otro numero: "));
var lista=new Array
function divisibles(a,b,lista){
    for(let i=1;i<=a;i++){
        if (i%b==0) {lista.push(i);}
    }
    console.log(lista)
}
console.log(divisibles(a,b,lista));
