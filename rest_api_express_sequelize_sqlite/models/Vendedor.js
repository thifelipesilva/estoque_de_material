const Sequelize = require('sequelize');
const database = require('../config/dbConnect');


const Vendedor = database.define('vendedor', {
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

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },    

    senha: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    materialVendidoId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'materials',
            key: 'id'
        }
    },
    dataVenda: {
        type: Sequelize.DATEONLY
    }
});

module.exports = Vendedor;