const prompt= require('prompt-sync')();
var num=parseInt(prompt("Introduzca un numero: "));
for(let i=1;i<=num;i++){
    if (i%2==0 && i%7==0){
       console.log("plataforma");
    } else if (i%2==0){
      console.log("plata");
    } else if (i%7==0){
      console.log("forma");
    } else{
      console.log(i);
    }
    
}
