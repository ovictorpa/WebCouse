function Repete(p1, p2){

    let array = []
    for(let i = 0; i< p2; i++){

        array.push(p1)
    }

    return array
}

console.log(Repete('codigo', 2))