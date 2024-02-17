const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const Suppliers = sequelize.define('suppliers', {
  supplier_id: {
    type: DataTypes.INTEGER,
  },
  supplier_name: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  supplier_phone: {
    type: DataTypes.STRING,
  },
  supplier_address: {
    type: DataTypes.STRING,
  },
  // createdAt: {
  //   type: DataTypes.DATE,
  //   default: DataTypes.NOW,
  // },
  // updatedAt: {
  //   type: DataTypes.DATE,
  //   default: DataTypes.NOW,
  // },
});

module.exports = Suppliers;

// has no classification and status
