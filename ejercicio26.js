var ecommerce = [{ nombre: "Samsung TV", precio: 6000, articulos:10}, { nombre: "DELL notbook", precio: 4000, articulos:30 }, {nombre:"Auriculares Sony", precio: 1500, articulos:15}, {nombre:"Monitor Philips", precio:12000, articulos:20}, {nombre:"Teclado logitech", precio: 3000, articulos:5}] 
function totalDeArticulos(ecommerce,nombre,precio){
    Array1 = ecommerce.map((a) => a[nombre]);
    Array2 = ecommerce.map((b) => b[precio]);
    Array3= Array1.concat(Array2)
    return Array1,Array2,Array3;
}
console.log(totalDeArticulos(ecommerce,"nombre","precio") );