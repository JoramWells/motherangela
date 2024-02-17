/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Accounting_item = sequelize.define('accounting_items', {
  item_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  item_code: {
    type: DataTypes.STRING,
  },
  item_description: {
    type: DataTypes.STRING,
  },
  item_category_id: {
    type: DataTypes.INTEGER,
  },
  measuring_unit_id: {
    type: DataTypes.INTEGER,
  },
  buying_price: {
    type: DataTypes.INTEGER,
  },
  selling_price: {
    type: DataTypes.INTEGER,
  },
  reorder_level: {
    type: DataTypes.INTEGER,
  },
  item_type_id: {
    type: DataTypes.INTEGER,
  },
  parent_item_id: {
    type: DataTypes.INTEGER,
  },
  stock_or_expense_account_id: {
    type: DataTypes.INTEGER,
  },
  income_account_id: {
    type: DataTypes.INTEGER,
  },
  stock_account_id: {
    type: DataTypes.INTEGER,
  },
  item_brand_id: {
    type: DataTypes.INTEGER,
  },
});
module.exports = Accounting_item;

// has no classification and status
