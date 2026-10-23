//lógica de negócio do backend;
//lógica de negócio do backend;
//cadastrar os usuários
const express = require('express');
const router = express.Router(); //modularizar as rotas
const db = require('../db'); //traz a conexão com o banco de dados
//CRUD - rotas
//listar todos os usuarios
router.get('/listar', (req, res)=>{
    db.query('SELECT * FROM users', (err, results) =>{
        if(err) return res.status(500).send(err);
        res.json(results);
    })
});

//rota - cadastrar usuario
router.post('/cadastrar', (req, res)=>{
    //capturar os dados enviados pelo formulário
    const {nome, email} = req.body;

    //instrução SQL
    db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email],
        (err, result) =>{
            if (err) return res.status(500).send(err);
            res.status(201).json({id:result.insertId, nome, email});
        }
    )
});
module.exports = router; //exportar o módulo API de usuarios
