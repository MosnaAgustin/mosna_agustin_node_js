const prompt= require('prompt-sync')();
function moveZeros(lista){
    return lista = [1,2,0,1,0,1,0,3,0,1].sort((a, b) => b-a);
 }
console.log(moveZeros());