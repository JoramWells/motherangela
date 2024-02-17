/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const AccountingDepartment = require('./accountingDepartment.model');

const AccountingItemMeasuringUnit = sequelize.define('accounting_item_measuring_units', {
  measuring_unit_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  measuring_unit_description: {
    type: DataTypes.STRING,
  },

});

AccountingItemMeasuringUnit.belongsTo(AccountingDepartment, {foreignKey:'department_id'})

module.exports = AccountingItemMeasuringUnit;

// has no classification and status
