const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const { sequelize } = require('./config/database');
const clientesRoutes = require('./routes/clientes');


const app = express();


app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3001',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

app.use('/clientes', clientesRoutes);

const PORT = process.env.PORT || 3000;

sequelize
    .sync({ force: true })
    .then(() => {
        console.log('Database sincronizada')
        app.listen(PORT, () => {
            console.log(`Servidor Rodando na Porta ${PORT}`)
        })
    })
    .catch((error) => console.error('Erro ao Sincronizar com o Banco De Dados:', error));