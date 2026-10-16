//credenciais de acesso ao banco de dados
//ip host: localhost (127.0.0.1)
//usuario: root
//senha: catolica
//banco de dados: userdb
//porta: 3306 ou 3307

const mysql = require('mysql2');

//criar a instância de conexão
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123', //usar a senha: catolica
    database: 'userdb',
    port: '3306'
});

//estabelecer a conexão
db.connect(err =>{
    if (err) throw err;
    console.log('conectado ao banco de dados');
});

//exportar o módulo
module.exports = db;
