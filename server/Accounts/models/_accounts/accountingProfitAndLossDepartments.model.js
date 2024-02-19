/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const AccountingProfitAndLossDepartments = sequelize.define('accounting_profit_and_loss_departments', {
  department_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  department_description: {
    type: DataTypes.STRING,
  },
  has_expenses: {
    type: DataTypes.INTEGER,
  },
});


module.exports = AccountingProfitAndLossDepartments;

// has no classification and status
