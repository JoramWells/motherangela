/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Payroll_taxable_state = require('./payrollTaxableStatus.model');

const Payroll_employee_tardiness_entry = sequelize.define('payroll_employee_tardiness_entries', {
  tardiness_entry_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  tardiness_entry_description: {
    type: DataTypes.STRING,
  },
  date_of_entry: {
    type: DataTypes.INTEGER,
  },
  tardiness_reference: {
    type: DataTypes.INTEGER,
  },
  employee_id: {
    type: DataTypes.INTEGER,
  },
  no_of_hours_late: {
    type: DataTypes.INTEGER,
  },
  no_of_hours_absent: {
    type: DataTypes.INTEGER,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },

}, { timestamps: false });

module.exports = Payroll_employee_tardiness_entry;
