function SomaElementos (array = []){

    let soma = 0
    for(let i = 0; i< array.length; i++) soma+=array[i]
    return soma
}

console.log(SomaElementos([10, 10, 10, 15, 15]))