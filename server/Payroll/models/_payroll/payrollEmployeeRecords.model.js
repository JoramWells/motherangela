/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const Payroll_job_title = require('./payrollJobTitles.model');

const Payroll_employee_record = sequelize.define('payroll_employee_records', {
  employee_id:
    {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  id_number:
    {
      type: DataTypes.STRING,
    },
  full_name:
    {
      type: DataTypes.STRING,
    },
  gender:
    {
      type: DataTypes.STRING,
    },
  date_of_birth:
    {
      type: DataTypes.STRING,
    },
  marital_status:
    {
      type: DataTypes.STRING,
    },
  cellphone:
    {
      type: DataTypes.STRING,
    },
  email:
    {
      type: DataTypes.STRING,
    },
  active_status:
    {
      type: DataTypes.INTEGER,
    },
  pay_period_id: {
    type: DataTypes.INTEGER,
  },
  period_rate: {
    type: DataTypes.INTEGER,
  },
  hourly_rate: {
    type: DataTypes.INTEGER,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
  pay_type_id: {
    type: DataTypes.INTEGER,
  },
  employment_status_id: {
    type: DataTypes.INTEGER,
  },
  job_title_id: {
    type: DataTypes.INTEGER,
  },
  address: {
    type: DataTypes.STRING,
  },
  city_of_residence: {
    type: DataTypes.STRING,
  },
  nationality: {
    type: DataTypes.INTEGER,
  },
  kra_pin_number: {
    type: DataTypes.STRING,
  },
  nhif_number: {
    type: DataTypes.STRING,
  },
  nssf_number: {
    type: DataTypes.STRING,
  },
  hire_date: {
    type: DataTypes.STRING,
  },
  termination_date: {
    type: DataTypes.STRING,
  },
  retire_date: {
    type: DataTypes.STRING,
  },
  tax_status_id: {
    type: DataTypes.INTEGER,
  },
  department_id: {
    type: DataTypes.INTEGER,
  },
  job_number: {
    type: DataTypes.STRING,
  },
  bank_branch: {
    type: DataTypes.STRING,
  },
  branch_code: {
    type: DataTypes.STRING,
  },
  bank_account_number: {
    type: DataTypes.STRING,
  },
  bank_id: {
    type: DataTypes.INTEGER,
  },
  deduct_nssf: {
    type: DataTypes.STRING,
  },
  deduct_nhif: {
    type: DataTypes.STRING,
  },
  employee_category_id: {
    type: DataTypes.STRING,
  },
  user_id: {
    type: DataTypes.STRING,
  },
  payroll_reason_for_leaving_id: {
    type: DataTypes.INTEGER,
  },
  date_of_start_of_regular_employment: {
    type: DataTypes.STRING,
  },
  maximum_number_of_hours_per_month: {
    type: DataTypes.INTEGER,
  },
  insurance_relief: {
    type: DataTypes.INTEGER,
  },
  tax_category_id: {
    type: DataTypes.INTEGER,
  },

});
Payroll_employee_record.belongsTo(Payroll_job_title, { foreignKey: 'job_title_id' });

module.exports = Payroll_employee_record;
