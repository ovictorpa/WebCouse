function getRandomInt(min, max){

    min = Math.ceil(min)
    max = Math.floor(max)


     return Math.floor(Math.random() * (max - min)) + min
}

function Sorteio (num){


    let numAleat = getRandomInt(1, 11)
    if(numAleat == num) return 'Parabéns! O número sorteado foi o ' + numAleat
    else return 'Que pena! O número sorteado foi o '+ numAleat
}

console.log(Sorteio(1))
console.log(Sorteio(2))
console.log(Sorteio(3))
console.log(Sorteio(4))
console.log(Sorteio(5))
console.log(Sorteio(6))
console.log(Sorteio(7))
console.log(Sorteio(8))
console.log(Sorteio(9))
console.log(Sorteio(10)) 