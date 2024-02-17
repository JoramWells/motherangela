/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Payroll_taxable_state = require('./payrollTaxableStatus.model');

const Payroll_employee_category = sequelize.define('payroll_employee_categories', {
  employee_category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  employee_category_description: {
    type: DataTypes.STRING,
  },

}, { timestamps: false });

module.exports = Payroll_employee_category;
