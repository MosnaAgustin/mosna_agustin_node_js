const prompt= require('prompt-sync')();
var edad=parseInt(prompt("Introduzca una edad: "));
if (edad<13)console.log("la edad es de un niño"); 
if (edad>=13 && edad<=17)console.log("la edad es de un adolescente");
if (edad>=18 && edad<=110)console.log("la edad es de un adulto");
if (edad>110)console.log("la edad no es valida"); 