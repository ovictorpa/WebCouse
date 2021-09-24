function SegundoMaior(array = []){

    let maior = array[0], menor = array[0]

    for(let i = 0; i< array.length; i++){

        if(array[i] > maior) maior = array[i]
    }

    for(let i = 0; i< array.length; i++){

        if(array[i]< menor) menor = array[i]
    }

    let SegundoMaior = menor

    for(let i = 0; i< array.length; i++){

        if(array[i] > SegundoMaior && array[i] < maior) SegundoMaior = array[i]
    }

    return SegundoMaior
}

console.log(SegundoMaior([8,4,5,6]))
console.log(SegundoMaior([100, -50, 50, 68, 92, 94]))
console.log(SegundoMaior([100, -50, 98, 68, 92, 94]))