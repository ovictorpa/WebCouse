function FirstAndLast(array = []){

    let NewArray = []
    NewArray.push(array[0])

    let IndiceArray = 0
    for(let i = 1; i<array.length; i++){

    IndiceArray++
    }

    NewArray.push(array[IndiceArray])

    return NewArray

}

console.log(FirstAndLast([1, 2, 3, 4, 5]))