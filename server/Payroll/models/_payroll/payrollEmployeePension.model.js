/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Payroll_taxable_state = require('./payrollTaxableStatus.model');

const Payroll_employee_pension = sequelize.define('payroll_employee_pension', {
  employee_pension_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  payroll_id: {
    type: DataTypes.INTEGER,
  },

  employee_id: {
    type: DataTypes.STRING,
  },
  basic_pay: {
    type: DataTypes.STRING,
  },
  employer_share: {
    type: DataTypes.STRING,
  },
  employee_share: {
    type: DataTypes.INTEGER,
  },
  fiscal_month: {
    type: DataTypes.INTEGER,
  },
  fiscal_year: {
    type: DataTypes.INTEGER,
  },
}, { timestamps: false });

module.exports = Payroll_employee_pension;
