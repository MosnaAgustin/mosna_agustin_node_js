const prompt= require('prompt-sync')();
var a=String(prompt("Introduzca una F: "));
while(a!="F"){
    var a=String(prompt("Introduzca una F: "));
    if (a=="F")
        console.log("lo lograste!");
}