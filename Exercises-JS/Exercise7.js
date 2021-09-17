function estaEntre(numero, minimo, maximo, inclusivo = false){

    if(numero > minimo && numero < maximo) return true;
    else return false;
    
}

console.log(estaEntre(10, 100, 50))