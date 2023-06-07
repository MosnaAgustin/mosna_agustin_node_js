let balancesUltimoSemestre = [
    { mes: "julio", ganancia: 50 }, 
    { mes: "agosto", ganancia: -12 }, 
    { mes: "septiembre", ganancia: 1000 }, 
    { mes: "octubre", ganancia: 300 }, 
    { mes:  "noviembre", ganancia: 200 }, 
    { mes: "diciembre", ganancia: 0 }
  ];
  cont=0
  function balancesPositivos(balancesUltimoSemestre){  
    for (balance of balancesUltimoSemestre){
        cont=cont+((balance.ganancia)>0)
    }
    console.log(cont);
}
console.log(balancesPositivos(balancesUltimoSemestre))