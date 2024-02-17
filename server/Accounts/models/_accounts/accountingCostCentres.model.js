/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const AccountingDepartment = require('./accountingDepartment.model');

const AccountingCostCentres = sequelize.define('accounting_cost_centres', {
  cost_centre_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  cost_centre_description: {
    type: DataTypes.STRING,
  },
  department_id: {
    type: DataTypes.INTEGER,
  },
});

AccountingCostCentres.belongsTo(AccountingDepartment,{foreignKey:'department_id'})

module.exports = AccountingCostCentres;

// has no classification and status
