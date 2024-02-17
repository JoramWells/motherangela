/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const AccountingAssetCategory = sequelize.define('accounting_asset_categories', {
  asset_category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  asset_category_description: {
    type: DataTypes.STRING,
  },
});
module.exports = AccountingAssetCategory;

// has no classification and status
