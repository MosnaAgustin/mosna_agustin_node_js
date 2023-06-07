const prompt=require("prompt-sync")();
var a=parseInt(prompt('Ingrese un numero: '))
var array=new Array
function breakstatement(a){
    for (i=0; i<10;i++){
        a= a + 2;
        if (a === i) break;
        else {
            array.push(a);
        }
    }
    if (i<10) {
        return "Se interrumpio la ejecucion";
    } else {
        return array;
    }
}
console.log(breakstatement(a));