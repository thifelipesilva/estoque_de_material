const Sequelize = require('sequelize');
const database = require('../config/dbConnect');

const Estoque = database.define('estoque', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    materialId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'materials',
            key: 'id'
        }
    },
    quantidade: {
        type: Sequelize.INTEGER
    }
})
 
module.exports = Estoque;
