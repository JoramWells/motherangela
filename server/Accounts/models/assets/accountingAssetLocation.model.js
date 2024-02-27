/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const AccountingAssetLocation = sequelize.define('accounting_asset_locations', {
  asset_location_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  asset_location_description: {
    type: DataTypes.STRING,
  },
});



module.exports = AccountingAssetLocation;

// has no classification and status
