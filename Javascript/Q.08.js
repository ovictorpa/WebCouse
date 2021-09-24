function multiplicaSemOperador(n1, n2){

    let acumula = 0
    for(let i = 0; i< n2; i++) acumula+=n1
    return acumula
}

console.log(multiplicaSemOperador(10,5))