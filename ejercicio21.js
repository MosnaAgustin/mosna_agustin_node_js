const prompt = require('prompt-sync')();
var var1=prompt("ingrese un nombre: ");
function abbrevName (var1){
    var array=var1.split(" ");
    var nombre=array[0];
    var apellido=array[1];
    var ini=nombre[0].toUpperCase()+"."+apellido[0].toUpperCase();
    return ini
}
console.log(abbrevName(var1));



