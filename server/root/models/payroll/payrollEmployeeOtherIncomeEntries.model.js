/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Payroll_taxable_state = require('./payrollTaxableStatus.model');

const Payroll_employee_other_income_entry = sequelize.define('payroll_employee_nssf_other_income_entries', {
  other_income_entry_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  other_income_entry_type_id: {
    type: DataTypes.INTEGER,
  },

  amount: {
    type: DataTypes.INTEGER,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
}, { timestamps: false });

module.exports = Payroll_employee_other_income_entry;
