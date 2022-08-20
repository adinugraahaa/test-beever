const { Sequelize } = require('sequelize');
const db = new Sequelize('test_beever', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

// contoh menambah komen
module.exports = db;
// menambah baris