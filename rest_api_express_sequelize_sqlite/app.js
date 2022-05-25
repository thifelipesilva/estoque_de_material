const express = require('express');
const router = require('./routes');
const sequelize = require('./config/dbConnect');

const app = express();
router(app);

sequelize.sync().then(() => {
    console.log('banco Conectado');
    app.listen(5000, console.log('rodando na porta 5000'));
});




