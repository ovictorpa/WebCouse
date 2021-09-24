function MenorNumero (array = []){

    let menor = array[0]

    for(let i = 0; i < array.length; i++){

        if(array[i] < menor) menor = array[i]
    }

    return menor

}

console.log(MenorNumero([5, -15, 50, 3]))