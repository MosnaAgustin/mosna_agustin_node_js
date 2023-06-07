const prompt = require('prompt-sync')();
var num = (parseInt(prompt("Escribe un número")));
if (num %5 === 0) {
console.log("Es divisible por 5");
} else {console.log("No es divisible por 5");}