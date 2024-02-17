/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const AccountItemCategory = sequelize.define('accounting_item_categories', {
  item_category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  item_category_description: {
    type: DataTypes.STRING,
  },
  item_code_prefix: {
    type: DataTypes.STRING,
  },
  icon_image: {
    type: DataTypes.STRING,
  },
});


module.exports = AccountItemCategory;

// has no classification and status
