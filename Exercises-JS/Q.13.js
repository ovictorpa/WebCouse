function RetornaNumeros(array = []){

    let NumberArray = []
    
    for(let i = 0; i< array.length; i++){

        if(typeof array[i] === 'number') NumberArray.push(array[i])

    }

    return NumberArray
}

console.log(RetornaNumeros(['javascript', '1', true, 3]))