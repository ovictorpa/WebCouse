const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json' //arquivo json contendo os funcionarios
const axios = require('axios') //axios faz requisição de conexão do servidor local com outro


const chineses = funci => funci.pais === 'China'
const argentinos = funci => funci.pais === 'Argentina'
const canadense = funci => funci.pais === 'Canada'
const mulheres = funci => funci.genero === 'F'
const homens = funci => funci.genero === 'M'
const menorSalario = (func1, func2) => { //compara os salarios de 2 funcionarios para obter o menor

    return func1.salario < func2.salario ? func1 : func2

}

const maiorSalario = (func1, func2) => { //compara os salarios de 2 funcionarios para obter o menor

    return func1.salario > func2.salario ? func1 : func2

}


axios.get(url).then(response => {

    console.log('Mulher Chinesa com o menor salário:')
    const funcionarios = response.data
    const func1 = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func1)

    console.log('Homem Argentino com o maior salário')
    const func2 = funcionarios
    .filter(argentinos)
    .filter(homens)
    .reduce(maiorSalario)

    console.log(func2)

    console.log('Homem e Mulher Canadenses com os maiores salarios')
    const func3 = funcionarios
    .filter(canadense)
    .filter(homens)
    .reduce(maiorSalario)

    const func4 = funcionarios
    .filter(canadense)
    .filter(mulheres)
    .reduce(maiorSalario)

    console.log(func3)
    console.log(func4)
})


