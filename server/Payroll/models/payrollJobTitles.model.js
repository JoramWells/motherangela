/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Payroll_taxable_state = require('./payrollTaxableStatus.model');

const Payroll_job_title = sequelize.define('payroll_job_titles', {
  job_title_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  job_title_description: {
    type: DataTypes.STRING,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },

}, { timestamps: false });

module.exports = Payroll_job_title;
