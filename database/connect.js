const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mssql',
  pool: {
    max: 5,
    min: 1,
    acquire: 30000,
    idle: 10000
  }
});