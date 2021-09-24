function ObjectsForArray(object = {}){

    //Pegar os parametros de um objeto e colocá-los em um array
return Object.entries(object)
}

console.log(ObjectsForArray({

    nome: 'Victor',
    cidade: 'Antonina'

}))