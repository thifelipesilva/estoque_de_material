const Sequelize = require('sequelize');
const database = require('../config/dbConnect');


const Vendedor = database.define('vendedor', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    materialVendidoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'materials',
            key: 'id'
        }
    },
    dataVenda: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    }
});

module.exports = Vendedor;