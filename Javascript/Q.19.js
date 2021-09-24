function CalculaMedia(array = []){

    let soma = 0
    for(let i = 0; i < array.length; i++) soma+=array[i]

    return soma/array.length
}

console.log(CalculaMedia([1, 2, 3, 4, 5]))