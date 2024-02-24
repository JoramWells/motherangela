/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Payroll_taxable_state = require('./payrollTaxableStatus.model');

const Payroll_fringe_benefit_tax = sequelize.define('payroll_fringe_benefit_tax', {
  fringe_benefit_tax_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  rate: {
    type: DataTypes.INTEGER,
  },
}, { timestamps: false });

module.exports = Payroll_fringe_benefit_tax;
