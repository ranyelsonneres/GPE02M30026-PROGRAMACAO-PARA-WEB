const express = require('express'); //servidor web com Node.js
const app = express() //criar uma instância desse framework
const port = 3000 //definir a porta que o servidor vai escutar

//decodificar a url
app.use(express.urlencoded({extendeds:true}))

//servidor deverá apresentar os arquivos estáticos
app.use(express.static('public'));

////rotas (método: GET, POST, PUT, DELETE)
app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/sobre', (req, res) => {
  //res.send('Página Sobre!')
  //criar a página sobre
  res.sendFile(__dirname + '/public/sobre.html')
})

app.post('/contato', (req, res)=>{
    const {nome, email} = req.body;
    res.send(`Dados recebidos: ${nome} -- ${email}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
