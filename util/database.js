const sqlite3 = require("sqlite3");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  'dracarys',
  'root',
  'Vera2359', {

      // Explicitly specifying 
      // mysql database
      dialect: 'mysql',

      // By default host is 'localhost'           
      host: 'localhost'
  }
);


module.exports = sequelize;
