/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../root/db/connect');

const Payroll_taxable_state = sequelize.define('payroll_taxable_states', {
  taxable_state_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  taxable_state_description: {
    type: DataTypes.STRING,
  },

}, { timestamps: false });

module.exports = Payroll_taxable_state;
