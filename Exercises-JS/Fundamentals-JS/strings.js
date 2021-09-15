const escola = "Cod3r"

//Procurar caractere pelo seu indice na string
console.log(escola.charAt(4))

//Procurar valor do caractere relacionado ao codigo
console.log(escola.charCodeAt(3))

//Verificar se existe valor tal na string
console.log(escola.indexOf('3'))

//Retornar string a partir de tal índice até tal índice
console.log(escola.substring(2))
console.log(escola.substring(2, 4))

//Concatenar string
console.log('Escola'. concat('!'))
console.log('Escola ' + escola + '!')

//Substituir dígitos por outros (com regex)
console.log(escola.replace(/\d/, 'e'))
console.log(escola.replace('C', 'c'))


// ------ TEMPLATE STRINGS ------
const nome = 'Victor'
const concatena = 'Olá ' + nome + '!'

//Crases são usadas para retornar o texto exatamente como foi digitado
const template = `

    Olá ${nome}!`

console.log(concatena, template)

//Transformar textos para maiúsculos
const up = string => string.toUpperCase()
console.log(`olá ${up('victor')}`)