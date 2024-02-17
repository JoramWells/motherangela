const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const ItemCategory = sequelize.define('itemCategory', {
  itemCategoryName: {
    type: DataTypes.STRING,
  },
  itemCodePrefix: {
    type: DataTypes.STRING,
  },
});

module.exports = ItemCategory;
