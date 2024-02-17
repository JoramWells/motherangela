/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const AccountingStoreTypes = sequelize.define('accounting_store_types', {
  store_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  store_type_description: {
    type: DataTypes.STRING,
  },
});


module.exports = AccountingStoreTypes;

// has no classification and status
