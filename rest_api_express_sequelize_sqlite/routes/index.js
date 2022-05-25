const express = require('express');
const materiais = require('./materiaisRoute');
const estoque = require('./estoqueRoute');
const vendedor = require('./vendedorRoutes');


const router = app => {
    app.route('/').get((req, res) => {
        res.send('Rota inicial')
    })

    app.use(
        express.json(),
        materiais,
        estoque,
        vendedor
    );
}

module.exports = router;