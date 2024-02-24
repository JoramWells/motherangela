/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Payroll_taxable_state = require('./payrollTaxableStatus.model');

const Payroll_employee_regular_time_entry = sequelize.define('payroll_employee_regular_time_entries', {
  employee_regular_time_entry_id_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  employee_regular_time_entry_description: {
    type: DataTypes.STRING,
  },
  date_of_entry: {
    type: DataTypes.INTEGER,
  },
  regular_time_reference: {
    type: DataTypes.INTEGER,
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

}, { timestamps: false });

module.exports = Payroll_employee_regular_time_entry;
