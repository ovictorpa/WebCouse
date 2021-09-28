const fs = require('fs')

const produto = {

    nome: 'Celular Samsung',
    preco: 1499.90,
    descontoavista: 0.20

}

fs.writeFile(__dirname + '/file-gerado.json', JSON.stringify(produto), err => {

    console.log(err || 'Tudo Certo!! Arquivo salvo')
})