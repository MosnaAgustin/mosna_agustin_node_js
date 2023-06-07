const prompt= require('prompt-sync')();
var a=parseInt(prompt("Introduzca un año: "));
if(a% 4 === 0)console.log("El año ingresado es bisiesto");
else{console.log("El año ingresado no es bisiesto")}
