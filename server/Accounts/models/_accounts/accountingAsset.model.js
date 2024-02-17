/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const AccountingAssetCategory = require('./accountingAssetCategory.model');
const AccountingAssetLocation = require('./accountingAssetLocation.model');
const AccountingAssetStatus = require('./accountingAssetStatus.model');

const AccountingAssets = sequelize.define('accounting_assets', {
  asset_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  asset_serial_no: {
    type: DataTypes.STRING,
  },
  asset_description: {
    type: DataTypes.STRING,
  },
  asset_category_id: {
    type: DataTypes.INTEGER,
  },
  asset_location_id: {
    type: DataTypes.INTEGER,
  },
  cost: {
    type: DataTypes.INTEGER,
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  stock_account_id: {
    type: DataTypes.INTEGER,
  },
  custodian: {
    type: DataTypes.STRING,
  },
  tag_number: {
    type: DataTypes.STRING,
  },
  asset_status_id: {
    type: DataTypes.INTEGER,
  },
  vendor_name: {
    type: DataTypes.STRING,
  },
  inventory_number: {
    type: DataTypes.INTEGER,
  },
  donor_name: {
    type: DataTypes.STRING,
  },
  date_of_purchase: {
    type: DataTypes.DATE,
  },
  voucher_number: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
  condition: {
    type: DataTypes.STRING,
  },
  date_of_last_physical_check: {
    type: DataTypes.DATE,
  },
  market_value_at_time_of_disposition: {
    type: DataTypes.STRING,
  },
  method_used_to_determine_market_value: {
    type: DataTypes.STRING,
  },
  property_transfer_memo: {
    type: DataTypes.STRING,
  },
  transfer_date: {
    type: DataTypes.DATE,
  },
});

AccountingAssets.belongsTo(AccountingAssetCategory, { foreignKey: 'asset_category_id' })
AccountingAssets.belongsTo(AccountingAssetLocation, { foreignKey: 'asset_location_id' })
AccountingAssets.belongsTo(AccountingAssetStatus, { foreignKey: 'asset_status_id' })

module.exports = AccountingAssets;

// has no classification and status
