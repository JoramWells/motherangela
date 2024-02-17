/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Payroll_bank = sequelize.define('payroll_banks', {
  bank_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  bank_description: {
    type: DataTypes.STRING,
  },

}, { timestamps: false });

module.exports = Payroll_bank;
