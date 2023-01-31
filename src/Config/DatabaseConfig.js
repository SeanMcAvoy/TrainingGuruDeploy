const { Sequelize } = require('sequelize');

const database = new Sequelize('TrainingGuru', 'admin', 'TrainingGuru', {
    dialect: 'mysql',
    host: 'traininggurudbonline.cxnpilaou3nh.eu-west-1.rds.amazonaws.com',
    port: '3306'

});



module.exports = database;





