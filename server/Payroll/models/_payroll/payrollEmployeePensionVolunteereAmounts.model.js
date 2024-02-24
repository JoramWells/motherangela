/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Payroll_taxable_state = require('./payrollTaxableStatus.model');

const Payroll_employee_pension_volunteered_amount = sequelize.define('payroll_employee_pension_volunteered_amounts', {
  employee_pension_volunteered_amount_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  employee_id: {
    type: DataTypes.STRING,
  },
  fiscal_month: {
    type: DataTypes.INTEGER,
  },
  fiscal_year: {
    type: DataTypes.INTEGER,
  },
  volunteered_amount: {
    type: DataTypes.INTEGER,
  },
  recurs: {
    type: DataTypes.STRING,
  },

}, { timestamps: false });

module.exports = Payroll_employee_pension_volunteered_amount;
