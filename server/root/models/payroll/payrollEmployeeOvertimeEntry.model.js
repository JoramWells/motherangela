/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Payroll_taxable_state = require('./payrollTaxableStatus.model');

const Payroll_employee_overtime_entry = sequelize.define('payroll_employee_overtime_entries', {
  overtime_entry_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  overtime_entry_type_id: {
    type: DataTypes.INTEGER,
  },

  overtime_entry_description: {
    type: DataTypes.STRING,
  },
  date_of_entry: {
    type: DataTypes.STRING,
  },
  overtime_reference: {
    type: DataTypes.STRING,
  },
  employee_id: {
    type: DataTypes.INTEGER,
  },
  no_of_hours: {
    type: DataTypes.INTEGER,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
  overtime_status_id: {
    type: DataTypes.INTEGER,
  },
}, { timestamps: false });

module.exports = Payroll_employee_overtime_entry;
