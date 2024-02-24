/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Payroll_taxable_state = require('./payrollTaxableStatus.model');

const Payroll_employee_loan_record = sequelize.define('payroll_employee_loan_records', {
  loan_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  employee_id: {
    type: DataTypes.INTEGER,
  },
  loan_reference: {
    type: DataTypes.STRING,
  },
  loan_description: {
    type: DataTypes.STRING,
  },
  loan_date: {
    type: DataTypes.STRING,
  },
  loan_type_id: {
    type: DataTypes.INTEGER,
  },
  loan_amount: {
    type: DataTypes.INTEGER,
  },
  starting_loan_balance: {
    type: DataTypes.INTEGER,
  },
  monthly_installment: {
    type: DataTypes.INTEGER,
  },
  monthly_interest_rate: {
    type: DataTypes.INTEGER,
  },
  interest_formula_id: {
    type: DataTypes.INTEGER,
  },
  fringe_benefit_tax: {
    type: DataTypes.STRING,
  },
  deduction_start_date: {
    type: DataTypes.STRING,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
}, { timestamps: false });

module.exports = Payroll_employee_loan_record;
