const contador1 = require('./instancia-unica')
const contador2 = require('./instancia-unica')
const contador3 = require('./instancia-nova')()
const contador4 = require('./instancia-nova')()

contador1.inc()
contador1.inc()
console.log(contador2.valor) //Incrementou os 2 :)

contador3.inc()
contador3.inc()
console.log(contador4.valor) //Nao incrementa os 2 pq é função :)