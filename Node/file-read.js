//LENDO ARQUIVOS PACKAGE.JSON

const fs = require('fs')

const caminho = __dirname + '/file.json'

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{

    const config = JSON.parse(conteudo)
    console.log(`${config.arquivo.host}:${config.arquivo.port}`)

})


//FORMA MAIS PRATICA
const config = require('./file.json')
console.log(config.arquivo.host)
console.log(config.arquivo.port)