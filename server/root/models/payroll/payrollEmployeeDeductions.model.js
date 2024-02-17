/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const Payroll_employee_record = require('./payrollEmployeeRecords.model');
// const Payroll_taxable_state = require('./payrollTaxableStatus.model');

const Payroll_employee_deduction = sequelize.define('payroll_employee_deductions', {
  employee_deduction_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  deduction_id: {
    type: DataTypes.INTEGER,
  },
  employee_id: {
    type: DataTypes.INTEGER,
  },
  fiscal_month: {
    type: DataTypes.INTEGER,
  },
  fiscal_year: {
    type: DataTypes.INTEGER,
  },
  fiscal_amount: {
    type: DataTypes.INTEGER,
  },
  percentage_amount: {
    type: DataTypes.INTEGER,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },

}, { timestamps: false });

Payroll_employee_deduction.belongsTo(Payroll_employee_record, { foreignKey: 'employee_id' });

module.exports = Payroll_employee_deduction;
