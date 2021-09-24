//Função que recebe um valoe numerico e booleano e retorna o inverso

function BooleanOrNumber(value){

    if(value == true || value == false) return !value
    else if(typeof value === 'number') return value*(-1)
    else return 'Esperava-se um valor booleano ou numérico, mas o valor indicado é ' + typeof value
}

console.log(BooleanOrNumber(true))
console.log(BooleanOrNumber(5))
console.log(BooleanOrNumber('Oi'))
console.log(BooleanOrNumber(-20000))