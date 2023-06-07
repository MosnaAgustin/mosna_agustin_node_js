const prompt= require('prompt-sync')();
array=[2, 5, 7, 10, 11, 15, 20]
var a=parseInt(prompt("Introduzca un numero : "));
function sumArray(array,a){
    const largo=array.length;
    for(let i=1;i<=largo;i++){
        const l1=array[i];
        for (let z=0;z<=largo;z++){
            const l2=array[z];
            if (l1+l2===a)return true;
             
        } 
    }  
    return false
}
console.log(sumArray(array,a));