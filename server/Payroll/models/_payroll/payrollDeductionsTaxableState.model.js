/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../../root/db/connect');

const Payroll_deductions_taxable_state = sequelize.define('payroll_deductions_taxable_state', {
  taxable_state_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  taxable_state_description: {
    type: DataTypes.STRING,
  },

}, { timestamps: false });

module.exports = Payroll_deductions_taxable_state;
