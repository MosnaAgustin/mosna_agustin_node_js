const prompt= require('prompt-sync')();
var a=parseInt(prompt("Introduzca un numero: "));
var suma=0
function sumattion(a,suma){
    for(let i=1; i<=a;i++){
        suma=suma+=i
    }
    console.log(suma)
}
console.log(sumattion(a,suma));