const prompt= require('prompt-sync')();
var a=parseInt(prompt("Introduzca angulo 1: "));
var b=parseInt(prompt("Introduzca angulo 2: "));
var c=parseInt(prompt("Introduzca angulo 3: "));
var suma = a+b+c;
if (suma == 180) console.log("su triangulo es valido");
else {console.log("su triangulo no es valido");}
    