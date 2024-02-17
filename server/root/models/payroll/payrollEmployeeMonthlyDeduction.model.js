/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Payroll_taxable_state = require('./payrollTaxableStatus.model');

const Payroll_employee_monthly_deduction = sequelize.define('payroll_employee_monthly_deductions', {
  monthly_deduction_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  deduction_id: {
    type: DataTypes.INTEGER,
  },
  employee_id: {
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.INTEGER,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
}, { timestamps: false });

module.exports = Payroll_employee_monthly_deduction;
