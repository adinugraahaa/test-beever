const Sequelize = require('sequelize');
const db = require('../databases/mysql');

let quotes = db.define('quotes', 
{
    quote: Sequelize.STRING,
    favorites: Sequelize.TINYINT
}, {
    timestamps: false
});

module.exports = quotes;