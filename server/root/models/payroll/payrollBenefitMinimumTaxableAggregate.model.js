/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Payroll_benefits_minimum_taxable_aggregate = sequelize.define('payroll_benefits_minimum_taxable_aggregate', {
  aggregate_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  minimum_taxable_aggregate_value: {
    type: DataTypes.INTEGER,
  },

}, { timestamps: false });

module.exports = Payroll_benefits_minimum_taxable_aggregate;
