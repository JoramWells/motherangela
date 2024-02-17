const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const SupplierClassification = sequelize.define('supplierClassification', {
  classificationName: {
    type: DataTypes.STRING,
  },
});

module.exports = SupplierClassification;
