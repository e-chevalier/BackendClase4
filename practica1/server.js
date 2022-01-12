import express from 'express';
const app = express()

const PORT = 8080
const frase = 'Hola mundo como están'

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/api/frase', (req, res) => {
    res.send(frase)
})

app.get('/api/letras/:num', (req, res) => {
    let letra = frase.charAt(Number(req.params.num))
    res.send(letra)
})

app.get('/api/palabras/:num', (req, res) => {
    const fraseArray = frase.split(' ')
    let idx = Number(req.params.num)
    res.send(idx < fraseArray.length? fraseArray[Number(req.params.num) - 1]: 'Numero de palabra no encontrada')
})


