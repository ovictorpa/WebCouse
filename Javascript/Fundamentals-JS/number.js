const number1 = 1.5
const number2 = 10

//Verificar se um número é inteiro
console.log(number1)
console.log(Number.isInteger(number1));

console.log(number2)
console.log(Number.isInteger(number2));

//Limitar casas decimais
const number3 = 1.23456789
console.log(number3.toFixed(2))
console.log((10.11121314).toFixed(3))

//Objeto MATH para cálculos
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2);

console.log(area)