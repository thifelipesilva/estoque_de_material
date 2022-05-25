const Sequelize = require('sequelize');


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './dataBase.sqlite'
});

module.exports = sequelize;