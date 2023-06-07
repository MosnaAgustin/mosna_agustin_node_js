const prompt= require('prompt-sync')();
lista=[{name:"TV LCD", price:100}, {name:"Computadora",price:500}]
function pluck(lista,propiedad){
    nuevoArray = lista.map((a) => a[propiedad]);
    return nuevoArray;
}
console.log(pluck(lista,"name"));
console.log(pluck(lista,"price"));
