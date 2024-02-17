/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Account_type = sequelize.define('account_types', {
  account_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  account_type_description: {
    type: DataTypes.STRING,
  },

});

// sequelize.sync().then(() => {
//   console.log('Book table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });
module.exports = Account_type;

// has no classification and status
