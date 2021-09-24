function StringSemelhante(palavra, array = []){

    let contido = []

    for(let i = 0; i< array.length; i++){

        if(array[i].indexOf(palavra) != -1) contido.push(array[i])

    }

    return contido
}

console.log(StringSemelhante('pro', ['programaçao', 'mobile', 'profissional'] ))
console.log(StringSemelhante('pe', ['pelo', 'do', 'peito', 'do', 'pé', 'de', 'pedro'] ))