function estaEntre(numero, minimo, maximo, inclusivo = false){

    if(inclusivo == true) {
        if (numero == minimo || numero == maximo) return true
        else return false

    }

    else if(numero > minimo && numero < maximo) return true;
    else return false;
    
}


console.log(estaEntre(3, 150, 3, true))
