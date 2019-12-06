//caminho relativo
const moduloA = require('../../moduloA')
const moduloB = require('../../moduloB')
console.log(moduloA.ola);
console.log(moduloB);

const http = require('http')

http.createServer((req, res) => {
    res.write('Bom dia dev')
    res.end()
}).listen(8800)