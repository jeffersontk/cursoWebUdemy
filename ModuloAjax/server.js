const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const multer = require('multer')

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload/../upload/')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})
const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.send('Ocorreu um erro.')
        }
        res.end('Concluido com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    //req.body / req.query / req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resuldado: par ? 'par' : 'impar'
    })
})

app.listen(8800, () => console.log('Executando em http://localhost:8800'))