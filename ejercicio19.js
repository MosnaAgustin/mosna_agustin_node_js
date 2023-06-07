const prompt=require("prompt-sync")();
var a=parseInt(prompt("Ingrese una cantidad de segundos: "))
var hora=0
var min=0
function toTime(a,hora,min){
    hora=a/3600
    min=a/60
    console.log(hora,"hour(s) and", min, " minutes(s)")
}
console.log(toTime(a,hora,min));