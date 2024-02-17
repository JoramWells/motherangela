/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Payroll_taxable_state = require('./payrollTaxableStatus.model');

const Payroll_pay_type = sequelize.define('payroll_pay_types', {
  pay_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  pay_type_description: {
    type: DataTypes.STRING,
  },

}, { timestamps: false });

module.exports = Payroll_pay_type;
