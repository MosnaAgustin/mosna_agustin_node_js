const prompt= require('prompt-sync')();
var color=(prompt("Introduzca un color: "));
switch(color){
    case ("azul"):
        console.log("blue");
        break;
    case ("rojo"):
        console.log("red");
        break;
    case ("verde"):
        console.log("green");
        break;
    case ("naranja"):
        console.log("orange");
        break;
    case ("amarillo"):
        console.log("yellow");
        break;
    default:
        console.log("color not found");
        break;
}
