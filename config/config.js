require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  dbHost: process.env.DB_HOST,
  port: process.env.PORT || 3000,
  dbName: process.env.DB_NAME,
  dbUserPostgres: process.env.DB_USER_POSTGRES,
  dbPortPostgres: process.env.DB_PORT_POSTGRES,
  dbUserMySQL: process.env.DB_USER_MYSQL,
  dbPortMySQL: process.env.DB_PORT_MYSQL,
  dbPassword: process.env.DB_PASSWORD,
};

module.exports = config;
