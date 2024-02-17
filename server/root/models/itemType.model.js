const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const ItemType = sequelize.define('itemType', {
  itemTypeName: {
    type: DataTypes.STRING,
  },
});

module.exports = ItemType;
