const moduleA = require('../../module-a')
console.log(moduleA.comovai)

const moduleindex = require('../../../index')
console.log(moduleindex)

const http = require('http')
http.createServer((req, res) =>{

    res.write('Bom dia!')
    res.end()

}).listen(8080)