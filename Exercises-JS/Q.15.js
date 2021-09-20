function RetornaPares(array = []){

    let ArrayDePares = []

    for(let i = 0; i < array.length; i++){

        if(array[i]%2 == 0) ArrayDePares.push(array[i])

    }

    return ArrayDePares
}

console.log(RetornaPares([1,2,3,4,5,6,7,8,9,10]))