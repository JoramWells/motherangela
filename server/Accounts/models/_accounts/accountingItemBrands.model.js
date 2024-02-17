/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const AccountingItemBrands = sequelize.define('accounting_item_brands', {
  item_brand_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  item_brand_description: {
    type: DataTypes.STRING,
  },
});
module.exports = AccountingItemBrands;

// has no classification and status
