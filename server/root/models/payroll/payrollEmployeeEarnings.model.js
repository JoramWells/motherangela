/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Payroll_taxable_state = require('./payrollTaxableStatus.model');

const Payroll_employee_earning = sequelize.define('payroll_employee_earnings', {
  employee_earning_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  earning_id: {
    type: DataTypes.INTEGER,
  },
  employee_id: {
    type: DataTypes.INTEGER,
  },
  fiscal_month: {
    type: DataTypes.INTEGER,
  },
  fiscal_year: {
    type: DataTypes.INTEGER,
  },
  fiscal_amount: {
    type: DataTypes.INTEGER,
  },
  percentage_amount: {
    type: DataTypes.INTEGER,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },

}, { timestamps: false });

module.exports = Payroll_employee_earning;
