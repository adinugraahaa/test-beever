const { Sequelize } = require('sequelize');
const db = new Sequelize('test_beever', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = db;
// contoh menambah komen