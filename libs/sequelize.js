const { Sequelize } = require('sequelize');
const config = require('../config/config');
const setupModels = require('../db/models');

const USER_POSTGRES = encodeURIComponent(config.dbUserPostgres);
//const USER_MYSQL = encodeURIComponent(config.dbUserMySQL);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `postgres://${USER_POSTGRES}:${PASSWORD}@${config.dbHost}:${config.dbPortPostgres}/${config.dbName}`;
//const URI = `mysql://${USER_MYSQL}:${PASSWORD}@${config.dbHost}:${config.dbPortMySQL}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  //dialect: 'mysql',
  logging: console.log,
});

setupModels(sequelize);

module.exports = sequelize;
