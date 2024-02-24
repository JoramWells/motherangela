/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Payroll_taxable_state = require('./payrollTaxableStatus.model');

const Payroll_employee_nssf_file = sequelize.define('payroll_employee_nssf_file', {
  employee_nssf_file_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  payroll_id: {
    type: DataTypes.INTEGER,
  },
  employee_id: {
    type: DataTypes.INTEGER,
  },
  gross_pay: {
    type: DataTypes.STRING,
  },
  employer_share: {
    type: DataTypes.INTEGER,
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

module.exports = Payroll_employee_nssf_file;
