/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Appointments = require('../appointment/appointments.models');

const Credit_payment = sequelize.define('credit_payments', {
  credit_payment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  invoice_no: {
    type: DataTypes.STRING,
  },
  amount: {
    type: DataTypes.INTEGER,
  },
  service_desc: {
    type: DataTypes.STRING,
  },
  appointment_id: {
    type: DataTypes.INTEGER,
  },
  date_of_invoice: {
    type: DataTypes.STRING,
  },
  time_of_invoice: {
    type: DataTypes.STRING,
  },
  insurance_id: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.INTEGER,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
  service_id: {
    type: DataTypes.INTEGER,
  },
  service_type_id: {
    type: DataTypes.INTEGER,
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  copay_amount: {
    type: DataTypes.INTEGER,
  },
  staff_number: {
    type: DataTypes.STRING,
  },
  insurance_membership_number: {
    type: DataTypes.STRING,
  },
  percentage_discount: {
    type: DataTypes.INTEGER,
  },
  amount_before_discount: {
    type: DataTypes.INTEGER,
  },
  withholding_tax_percentage: {
    type: DataTypes.INTEGER,
  },
  withholding_tax_amount: {
    type: DataTypes.INTEGER,
  },
  dispatched: {
    type: DataTypes.STRING,
  },
  dispatched_by: {
    type: DataTypes.INTEGER,
  },
  dispatch_date: {
    type: DataTypes.STRING,
  },
  dispatch_time: {
    type: DataTypes.STRING,
  },
  discounted_amount: {
    type: DataTypes.INTEGER,
  },
  rejected_amount: {
    type: DataTypes.INTEGER,
  },
  is_copay: {
    type: DataTypes.STRING,
  },
  // daily_nursing_rate_no_days: {
  //   type: DataTypes.INTEGER,
  // },
  company_id: {
    type: DataTypes.INTEGER,
  },
  total_invoice_amount: {
    type: DataTypes.INTEGER,

  },
  total_charge_payments: {
    type: DataTypes.INTEGER,
  },
  total_credit_payments_which_are_copay: {
    type: DataTypes.INTEGER,
  },
  total_nhif_rebate_amount: {
    type: DataTypes.INTEGER,
  },
  total_invoice_payments: {
    type: DataTypes.INTEGER,
  },
  total_amount_allocated_from_payments: {
    type: DataTypes.INTEGER,
  },
  total_credit_notes: {
    type: DataTypes.INTEGER,
  },
  is_finalized: {
    type: DataTypes.STRING,
  },
  patient_id_credit_payments: {
    type: DataTypes.INTEGER,
  },
  patient_full_name: {
    type: DataTypes.STRING,
  },
  first_particular_service_description: {
    type: DataTypes.STRING,
  },
  admission_status: {
    type: DataTypes.STRING,
  },
  insurance_name_credit_payments: {
    type: DataTypes.STRING,
  },
  seen_by_consultant: {
    type: DataTypes.STRING,
  },
  doctor_name: {
    type: DataTypes.STRING,
  },
  account_id: {
    type: DataTypes.INTEGER,
  },
  clinic_id: {
    type: DataTypes.INTEGER,
  },
  clinic_name: {
    type: DataTypes.STRING,
  },
  total_discount_amount: {
    type: DataTypes.INTEGER,
  },
  unit_cost_of_sale: {
    type: DataTypes.INTEGER,
  },
  cost_of_sale_account_id: {
    type: DataTypes.INTEGER,
  },
  stock_account_id: {
    type: DataTypes.INTEGER,
  },
  total_insurance_deduction_amount: {
    type: DataTypes.INTEGER,
  },
  claim_number: {
    type: DataTypes.STRING,
  },
  date_of_discount_allowance: {
    type: DataTypes.STRING,
  },
  account_group_id: {
    type: DataTypes.INTEGER,
  },
  reference_credit_payment_id_cp: {
    type: DataTypes.INTEGER,
  },
  revenue_expected: {
    type: DataTypes.INTEGER,
  },
  finalized_by: {
    type: DataTypes.INTEGER,
  },
  finalized_by_user_id: {
    type: DataTypes.INTEGER,
  },
  finalized_by_user_full_name: {
    type: DataTypes.STRING,
  },
  date_of_finalization: {
    type: DataTypes.STRING,
  },
  time_of_finalization: {
    type: DataTypes.STRING,
  },
  total_bad_debts_amount: {
    type: DataTypes.INTEGER,
  },
  total_nhif_rebate_gained_amount: {
    type: DataTypes.INTEGER,
  },
});

// Credit_payment.belongsTo(Appointments, { foreignKey: 'appointment_id' });

module.exports = Credit_payment;

// has no classification and status
