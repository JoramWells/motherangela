/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const Payroll_taxable_state = require('./payrollTaxableStatus.model');

const Payroll_deduction = sequelize.define('payroll_deductions', {
  deduction_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  deduction_description: {
    type: DataTypes.STRING,
  },
  taxable_state_id: {
    type: DataTypes.INTEGER,
  },

}, { timestamps: false });

Payroll_deduction.belongsTo(Payroll_taxable_state, { foreignKey: 'taxable_state_id' });

module.exports = Payroll_deduction;
