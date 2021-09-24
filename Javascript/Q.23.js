
function QuantasPalavras(palavra){

    let qtd = 1

    for(let i = 0; i< palavra.length; i++){

        if(palavra[i] == ' ' && i == (palavra.length -1)) break;
        else if(palavra[i] == ' ') qtd++

    }

    return qtd
}

console.log(QuantasPalavras('Sou uma frase'))
console.log(QuantasPalavras('Me divirto aprendendo a programar'))
console.log(QuantasPalavras('Bom dia '))
