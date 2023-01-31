const { Sequelize } = require('sequelize');
require('dotenv').config();

const database = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER_NAME, process.env.DATABASE_PW, {
    dialect: 'mysql',
    host: process.env.DATABASE_URL,
    port: '3306'

});


module.exports = database;





