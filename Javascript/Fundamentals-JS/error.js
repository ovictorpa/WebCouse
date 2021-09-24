function tratandoErro(e){

    throw new Error('NOVO ERRO')
}

function imprimirMaiusculo (){

    try {
        //Erro no 'name'
    console.log(obj.name.toUpperCase() + '!!')
    } catch(error){

        tratandoErro(error)
    }
}

const obj = {nome: 'Victor'}
imprimirMaiusculo(obj)