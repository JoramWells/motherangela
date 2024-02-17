const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const SubItem = sequelize.define('subItem', {
  subItemName: {
    type: DataTypes.STRING,
  },
});

module.exports = SubItem;
