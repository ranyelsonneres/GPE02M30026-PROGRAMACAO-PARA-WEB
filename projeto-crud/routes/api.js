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

//excluir usuario
router.delete('/excluir/:id', (req, res)=>{
   const {id} = req.params; //parametro do usuario (ID)
   //executar a instrução SQL
   db.query('DELETE FROM users WHERE id = ?', 
        [id], 
        (err) =>{
            if(err) return res.status(500).send(err);
            res.sendStatus(204);
        }
   );
});

//editar usuario
router.put('/editar/:id', (req, res)=>{
    //extrair os dados
    const {nome, email} = req.body;
    //buscar o ID
    const {id} = req.params;
    //executar a instrução SQL (update) 
    db.query('UPDATE users SET nome = ?, email = ? WHERE id = ?',
        [nome, email, id],
        (err)=>{
            if(err) return res.status(500).send(err);
            res.json({id, nome, email});
        }
    );
});


module.exports = router; //exportar o módulo API de usuarios
