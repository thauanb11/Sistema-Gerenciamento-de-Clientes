const Sequelize = require('sequelize');
const { sequelize } = require('../config/database');

const Cliente = sequelize.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    telefone: Sequelize.INTEGER,
    coodenadaX: Sequelize.INTEGER,
    coordenadaY: Sequelize.INTEGER,
});

module.exports = Cliente;