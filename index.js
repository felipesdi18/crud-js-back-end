//require é o include
let express = require('express')
let bodyParser = require('body-parser')
let rotas = require('./rotas')

let server = express()
server.use(bodyParser.json())
server.use("/", rotas)


//3000 é a porta usada.
server.listen(3000, function () {
    console.log("O servidor está onlinde, ta liberadah a baGUNÇA")
})