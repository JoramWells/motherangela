/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Payroll_taxable_state = require('./payrollTaxableStatus.model');

const Payroll_employee_tax_file = sequelize.define('payroll_employee_tax_file', {
  tax_file_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  payroll_id: {
    type: DataTypes.INTEGER,
  },

  employee_id: {
    type: DataTypes.INTEGER,
  },
  taxable_income: {
    type: DataTypes.INTEGER,
  },
  tax_amount: {
    type: DataTypes.INTEGER,
  },
  fiscal_month: {
    type: DataTypes.INTEGER,
  },
  fiscal_year: {
    type: DataTypes.INTEGER,
  },
}, { timestamps: false });

module.exports = Payroll_employee_tax_file;
