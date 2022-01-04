const config = require('../config/config');

const USER_POSTGRES = encodeURIComponent(config.dbUserPostgres);
//const USER_MYSQL = encodeURIComponent(config.dbUserMySQL);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `postgres://${USER_POSTGRES}:${PASSWORD}@${config.dbHost}:${config.dbPortPostgres}/${config.dbName}`;
//const URI = `mysql://${USER_MYSQL}:${PASSWORD}@${config.dbHost}:${config.dbPortMySQL}/${config.dbName}`;

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
  },
};
