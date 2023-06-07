const prompt= require('prompt-sync')();
var far = parseInt(prompt("ingrese una temperatura en grados farenheit: "));
var cel = ((far-32)*5)/9;
console.log("la convercion a celsius es: ", cel);
