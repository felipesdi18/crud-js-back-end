let express = require('express')
let router = express.Router()

let notas = []

router.get('/', function (req, res) {
    let id = req.query.id

    if (id === undefined) {
        res.json({
            notas: notas
        })
    } else {
        id = parseInt(id)

        const nota = notas.find(value => {
            if (value.id === id) {
                return true
            } else {
                return false
            }
        })
        res.json({
            nota: nota
        })
    }
})

router.get('/jsonTeste', function (req, res) {
    res.json({
        nome: "Felipe",
        alunos: ["felipe", "Joao"]
    })
})

router.post('/new', function (req, res) {
    let data = req.body

    if (data.text === undefined || data.title === undefined) {
        res.json({
            error: "Uma nota deve ter um 'text' e 'title' "
        })
    } else {
        data.id = notas.length + 1 //A cada data ele acrescenta +1
        notas.push(data)
        res.json({
            message: "nota salva"
        })
    }
})

router.delete('/delete', function (req, res) {
    let id = req.query.id
    if (id === undefined) {
        res.json({
            error: "É necessario saber o id"
        })
    } else {
        id = parseInt(id)
        notas = notas.filter(value => {
            if (value.id === id) {
                return false
            } else {
                return true
            }
        })

        res.json({
            message: "Nota apagada",
            notas: notas
        })

    }

})

router.put('/update', function (req, res) {
    let id = req.query.id
    let data = req.body

    if (id === undefined) {
        res.json({
            error: "É necessario saber o id"
        })
    } else {
        id = parseInt(id)

        notas = notas.map(value => {
            if (value.id === id) {
                value.title = data.title
                value.text = data.text
            }
            return value
        })
        res.json({
            message: "Nota Alterada",
            notas: notas
        })
    }
})

module.exports = router