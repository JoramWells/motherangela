/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Payroll_taxable_state = require('./payrollTaxableStatus.model');

const Payroll_employment_status = sequelize.define('payroll_employment_status', {
  employment_status_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  employment_status_description: {
    type: DataTypes.STRING,
  },

  hospital_id: {
    type: DataTypes.INTEGER,
  },
}, { timestamps: false });

module.exports = Payroll_employment_status;
