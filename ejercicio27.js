let balancesUltimoSemestre = [
    { mes: "julio", ganancia: 50 }, 
    { mes: "agosto", ganancia: -12 }, 
    { mes: "septiembre", ganancia: 1000 }, 
    { mes: "octubre", ganancia: 300 }, 
    { mes:  "noviembre", ganancia: 200 }, 
    { mes: "diciembre", ganancia: 0 }
  ];
  function gananciaTotal(balancesUltimoSemestre){  
    let gananciat=0
    gananciat=gananciat+balancesUltimoSemestre[0].ganancia
    gananciat=gananciat+balancesUltimoSemestre[1].ganancia
    gananciat=gananciat+balancesUltimoSemestre[2].ganancia
    gananciat=gananciat+balancesUltimoSemestre[3].ganancia
    gananciat=gananciat+balancesUltimoSemestre[4].ganancia
    gananciat=gananciat+balancesUltimoSemestre[5].ganancia
    return gananciat
}
console.log(gananciaTotal(balancesUltimoSemestre));