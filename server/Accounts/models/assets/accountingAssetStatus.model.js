/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const AccountingAssetStatus = sequelize.define('accounting_asset_status', {
  asset_status_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  asset_status_description: {
    type: DataTypes.STRING,
  },
});



module.exports = AccountingAssetStatus;

// has no classification and status
