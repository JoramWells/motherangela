const Sequelize = require('sequelize');

// setting up sequelize

const DB = 'huruma2';
const USERNAME = 'postgres';
const PASSWORD = 'root';

const connect = new Sequelize(
  DB,
  USERNAME,
  PASSWORD,
  {
    host: 'huruma_database_1',
    dialect: 'postgres',
    logging: false,
    define: {
      timestamps: false,
      freezeTableName: true,

    },
  },

);

module.exports = connect;
