const prompt= require('prompt-sync')();
let c
do{
    var a=parseInt(prompt("Introduzca un numero: "));
    var b=parseInt(prompt("Introduzca otro numero: "));
    sum=a+b;
    console.log("La suma de los numero es: ",sum);
    do{
        c= prompt("¿Quieres repetir la operación? SI o NO ").toUpperCase();
    }   while(c!=="SI"&&c!=="NO");
}while(c==="SI");