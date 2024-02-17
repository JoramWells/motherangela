/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Payroll_benefit_type = sequelize.define('payroll_benefit_types', {
  benefit_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  benefit_type_description: {
    type: DataTypes.STRING,
  },

}, { timestamps: false });

module.exports = Payroll_benefit_type;
