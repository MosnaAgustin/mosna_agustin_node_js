const prompt= require('prompt-sync')();
var a=parseInt(prompt("Introduzca un numero: "));
var lista=new Array
function arregloDeObjetos(a,lista){
    for(let i=1; i<=a;i++){
        {lista.push({["Valor "]:i});
    } 
}
console.log(lista)
}
console.log(arregloDeObjetos(a,lista));