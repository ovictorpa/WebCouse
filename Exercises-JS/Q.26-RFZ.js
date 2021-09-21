function ApenasConsoantes(palavra){

    let PalavraModificada = ''

    for(let i = 0; i< palavra.length; i++){

        if(palavra[i] != 'a' || palavra[i] != 'e' || palavra[i] != 'i' || palavra[i] != 'o' || palavra[i] != 'u'
        || palavra[i] != 'A' || palavra[i] != 'E' || palavra[i] != 'I' || palavra[i] != 'O' || palavra[i] != 'U'){
        PalavraModificada.concat(palavra[i])
        }
    }

    return PalavraModificada
}

console.log(ApenasConsoantes('Cod3r'))
console.log(ApenasConsoantes('Fundamentos'))