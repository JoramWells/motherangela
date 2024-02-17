/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const AccountingItemType = sequelize.define('accounting_item_types', {
  item_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  item_type_description: {
    type: DataTypes.STRING,
  },
});


module.exports = AccountingItemType;

// has no classification and status
