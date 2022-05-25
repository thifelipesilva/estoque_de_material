const Sequelize = require('sequelize');
const database = require('../config/dbConnect');
const Estoque = require('./Estoques');
const Vendedor = require('./Vendedor');
 
const Material = database.define('material', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DOUBLE
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: Sequelize.STRING
});


Material.hasMany(Estoque, { foreignKey: 'materialId' });
Material.hasMany(Vendedor, { foreignKey: 'materialVendidoId' });


module.exports = Material;