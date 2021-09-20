//Função de forma literal
function f1() { }

//Armazenar função em forma de variável
const f2 = function () { }

//Função dentro de um array
const array = [ function(a, b) { return a, b} ]

//Atribuito de objeto

const obj = {

    f3: function(){ return 'Object'}

}

//Função como parâmetro para outra
function run(fun){

    fun()
}

run(function() { console.log('Executando...')})


function soma1(a,b){

    return function soma2(c){
        console.log(a+b+c)
    }
}

soma1(2,3)(4)