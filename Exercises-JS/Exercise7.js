function estaEntre(numero, minimo, maximo, inclusivo = false){

    if(inclusivo == true && (numero == minimo || numero == maximo)) return true;
    else if(numero > minimo && numero < maximo) return true;
    
}

console.log(estaEntre(10, 100, 50))