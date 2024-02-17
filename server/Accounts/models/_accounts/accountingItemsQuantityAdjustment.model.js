/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const AccountingItemsQuantityAdjustment = sequelize.define('accounting_items_quantities_adjustment', {
  adjustment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  date_of_adjustment: {
    type: DataTypes.STRING,
  },
  time_of_adjustment: {
    type: DataTypes.STRING,
  },
  store_id: {
    type: DataTypes.INTEGER,
  },
  item_id: {
    type: DataTypes.INTEGER,
  },
  current_quantity: {
    type: DataTypes.INTEGER,
  },
  correct_quantity: {
    type: DataTypes.INTEGER,
  },
  quantity_of_adjustment: {
    type: DataTypes.INTEGER,
  },
  reference: {
    type: DataTypes.STRING,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
  unit_price: {
    type: DataTypes.INTEGER,
  },
  reason_for_adjustment: {
    type: DataTypes.INTEGER,
  },
});
module.exports = AccountingItemsQuantityAdjustment;

// has no classification and status
