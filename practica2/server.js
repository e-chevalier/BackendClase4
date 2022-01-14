import express from 'express';
const app = express()

const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})


server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/api/sumar/:num1/:num2', (req, res) => {
    let result = Number(req.params.num1) +  Number(req.params.num2)
    res.send(result.toString())
})

app.get('/api/sumar', (req, res) => {
    let result = Number(req.query.num1) +  Number(req.query.num2)
    res.send(result.toString())
})

app.get('/api/operacion/:num1:operator:num2', (req, res) => {
    let result = Number(req.params.num1) +  Number(req.params.num2)
    res.send(result.toString())
})




