const express = require('express');
const { Pool } = require('pg');
const router = express.Router();
const Cliente = require('../models/cliente');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '123456',
    port: 5432
});


router.get('/', async (req, res) => {
    try {
        const clientes = await pool.query('SELECT * FROM clientes');
        res.json(clientes)
    } catch (error) {
        console.error('Erro ao obter clientes:', error)
        res.status(500).json({ error: 'Erro interno do Servidor' });
    }
});

router.post('/', async (req, res) => {
    const { nome, email, telefone, coordenadaX, coordenadaY } = req.body
    try {
        const clientes = await query('ISERT INTO clientes(nome,email,telefone,coordenadaX, coordenadaY) VALUES($1,$2,$3,$4,$5)RETURNING*',
            [nome, email, telefone, coordenadaX, coordenadaY]);
        res.json(cliente[0]);
    } catch (error) {
        console.error('Erro ao cadastrar Cliente:', error);
        res.status(500).json({ error: 'Erro interno do Servidor' })
    }
})

module.exports = router;