const { Sequelize } = require('sequelize');
const db = new Sequelize('test_beever', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

// menambah baris
module.exports = db;