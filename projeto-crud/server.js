const express = require('express');
const app = express();

//estabelecer os arquivos estáticos
const path = require('path'); //construção do caminho
//pasta dos arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//criar a conexão de teste:
const db = require('./db');

const port = 3000; //porta do servidor web
//rota padrão
app.get('/', (req, res) =>{
    //res.send("Front funcionando e ok");
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, ()=>{
    console.log("servidor funcionando");
});
