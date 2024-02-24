/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Payroll_taxable_state = require('./payrollTaxableStatus.model');

const Payroll_employee_monthly_shift_detail = sequelize.define('payroll_employee_monthly_shift_details', {
  employee_monthly_shift_detail_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  shift_id: {
    type: DataTypes.INTEGER,
  },
  employee_id: {
    type: DataTypes.INTEGER,
  },
  employee_full_name: {
    type: DataTypes.STRING,
  },
  fiscal_month: {
    type: DataTypes.INTEGER,
  },
  fiscal_year: {
    type: DataTypes.STRING,
  },
  maximum_number_of_hours_per_month: {
    type: DataTypes.INTEGER,
  },
  no_of_hours_worked: {
    type: DataTypes.INTEGER,
  },
  no_of_hours_over_time: {
    type: DataTypes.INTEGER,
  },
  shift_rate: {
    type: DataTypes.INTEGER,
  },
  overtime_amount: {
    type: DataTypes.INTEGER,
  },
  shift_name: {
    type: DataTypes.STRING,
  },
}, { timestamps: false });

module.exports = Payroll_employee_monthly_shift_detail;
