/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Payroll_earning_type = sequelize.define('payroll_earning_types', {
  earning_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  earning_type_description: {
    type: DataTypes.STRING,
  },

}, { timestamps: false });

module.exports = Payroll_earning_type;
