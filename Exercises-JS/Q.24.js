function CaractereNaString(carac, frase){

    let qtd = 0

    for(let i = 0; i<frase.length; i++){

        if(frase[i] == carac) qtd++

    }

    return qtd
}

console.log(CaractereNaString('r', 'A sorte favorece os audazes'))
console.log(CaractereNaString('c', 'Conhece-te a ti mesmo'))
console.log(CaractereNaString('a', 'Amanha irei amar com meu amor'))