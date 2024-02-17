/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const User_privilege = sequelize.define('user_privileges', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  view_waiting_patients: {
    type: DataTypes.STRING,
  },
  view_patients_seen_on_a_selected_period: {
    type: DataTypes.STRING,
  },
  register_patient: {
    type: DataTypes.STRING,
  },
  register_inpatient: {
    type: DataTypes.STRING,
  },
  view_patients: {
    type: DataTypes.STRING,
  },
  view_admitted_patients: {
    type: DataTypes.STRING,
  },
  view_highest_average_and_lowest_scores: {
    type: DataTypes.STRING,
  },
  view_appointments: {
    type: DataTypes.STRING,
  },
  view_patient_charges: {
    type: DataTypes.STRING,
  },
  reconcile_personal_charges_payments: {
    type: DataTypes.STRING,
  },
  reconcile_credit_payments: {
    type: DataTypes.STRING,
  },
  daily_cash_reports: {
    type: DataTypes.STRING,
  },
  daily_credit_reports: {
    type: DataTypes.STRING,
  },
  view_invoices: {
    type: DataTypes.STRING,
  },
  purchase_vaccine: {
    type: DataTypes.STRING,
  },
  vaccine_purchases_report: {
    type: DataTypes.STRING,
  },
  vaccine_sales_report: {
    type: DataTypes.STRING,
  },
  vaccine_stock_report: {
    type: DataTypes.STRING,
  },
  record_expense: {
    type: DataTypes.STRING,
  },
  expenses_report: {
    type: DataTypes.STRING,
  },
  items_that_need_reorder: {
    type: DataTypes.STRING,
  },
  register_user: {
    type: DataTypes.STRING,
  },
  view_users: {
    type: DataTypes.STRING,
  },
  register_items: {
    type: DataTypes.STRING,
  },
  view_items: {
    type: DataTypes.STRING,
  },
  upload_hospital_logo: {
    type: DataTypes.STRING,
  },
  logo_details: {
    type: DataTypes.STRING,
  },
  view_waiting_patients_for_lab: {
    type: DataTypes.STRING,
  },
  view_patient_visits_on_lab: {
    type: DataTypes.STRING,
  },
  view_external_patient_visits_on_lab: {
    type: DataTypes.STRING,
  },
  view_waiting_patients_for_pharmacy: {
    type: DataTypes.STRING,
  },
  purchase_medicine: {
    type: DataTypes.STRING,
  },
  medicine_purchases_report: {
    type: DataTypes.STRING,
  },
  medicine_sales_report: {
    type: DataTypes.STRING,
  },
  medicine_stock_report: {
    type: DataTypes.STRING,
  },
  view_waiting_patients_for_radiology: {
    type: DataTypes.STRING,
  },
  view_patient_visits_on_radiology: {
    type: DataTypes.STRING,
  },
  view_external_patient_visits_on_radiology: {
    type: DataTypes.STRING,
  },
  edit_patient_charges: {
    type: DataTypes.STRING,
  },
  collections_per_service_corporate_report: {
    type: DataTypes.STRING,
  },
  collections_per_service_non_corporate_report: {
    type: DataTypes.STRING,
  },
  cancel_transaction: {
    type: DataTypes.STRING,
  },
  edit_personal_charge_payment: {
    type: DataTypes.STRING,
  },
  view_edited_payments_report: {
    type: DataTypes.STRING,
  },
  handle_payroll: {
    type: DataTypes.STRING,
  },
  record_vital_signs: {
    type: DataTypes.STRING,
  },
  chart_of_accounts: {
    type: DataTypes.STRING,
  },
  general_journal: {
    type: DataTypes.STRING,
  },
  banking: {
    type: DataTypes.STRING,
  },
  petty_cash: {
    type: DataTypes.STRING,
  },
  taxes: {
    type: DataTypes.STRING,
  },
  general_accounting_items: {
    type: DataTypes.STRING,
  },
  money_in_items: {
    type: DataTypes.STRING,
  },
  money_out_items: {
    type: DataTypes.STRING,
  },
  view_accounting_reports: {
    type: DataTypes.STRING,
  },
  medicine_stock_adjustment: {
    type: DataTypes.STRING,
  },
  create_consultation_retainer_invoice: {
    type: DataTypes.STRING,
  },
  medicine_batch_expiry_report: {
    type: DataTypes.STRING,
  },
  drugs_dispensed_reversal: {
    type: DataTypes.STRING,
  },
  remove_undispensed_drugs: {
    type: DataTypes.STRING,
  },
  edit_invoice_payment: {
    type: DataTypes.STRING,
  },
  discounting: {
    type: DataTypes.STRING,
  },
  maternity: {
    type: DataTypes.STRING,
  },
  mortuary: {
    type: DataTypes.STRING,
  },
  stores: {
    type: DataTypes.STRING,
  },
  issue_items_to_cost_centres: {
    type: DataTypes.STRING,
  },
  loan_items_to_cost_centres: {
    type: DataTypes.STRING,
  },
  internal_transfers: {
    type: DataTypes.STRING,
  },
  stock_adjustment: {
    type: DataTypes.STRING,
  },
  inventory_reports: {
    type: DataTypes.STRING,
  },
  view_inpatient_admission_profile: {
    type: DataTypes.STRING,
  },
  view_interim_inpatient_bill: {
    type: DataTypes.STRING,
  },
  discharge_patient: {
    type: DataTypes.STRING,
  },
  cancel_admission: {
    type: DataTypes.STRING,
  },
  upload_appointment_files: {
    type: DataTypes.STRING,
  },
  view_patients_diagnoses: {
    type: DataTypes.STRING,
  },
  receipt_partial_payments: {
    type: DataTypes.STRING,
  },
  insurance_drugs_sales_allowance_mapping: {
    type: DataTypes.STRING,
  },
  bill_patient_meals: {
    type: DataTypes.STRING,
  },
  remove_lab_and_radiology_requests: {
    type: DataTypes.STRING,
  },
  edit_personal_charge_particulars: {
    type: DataTypes.STRING,
  },
  edit_invoice_particulars: {
    type: DataTypes.STRING,
  },
  add_and_modify_bills_of_closed_patient_visits: {
    type: DataTypes.STRING,
  },
  view_physiotherapy_stock: {
    type: DataTypes.STRING,
  },
  assets: {
    type: DataTypes.STRING,
  },
  vehicles_and_mileage: {
    type: DataTypes.STRING,
  },
  create_and_view_purchase_orders: {
    type: DataTypes.STRING,
  },
  remove_undispensed_pharmacy_request: {
    type: DataTypes.STRING,
  },
  add_invoice_payment: {
    type: DataTypes.STRING,
  },
  leave_management: {
    type: DataTypes.STRING,
  },
  employee_performance_management: {
    type: DataTypes.STRING,
  },
  edit_accounts_from_general_journal: {
    type: DataTypes.STRING,
  },
  edit_medicine_purchase: {
    type: DataTypes.STRING,
  },
  edit_petty_cash_transaction: {
    type: DataTypes.STRING,
  },
  view_general_ledger_report: {
    type: DataTypes.STRING,
  },
  view_trial_balance_report: {
    type: DataTypes.STRING,
  },
  view_profit_and_loss_report: {
    type: DataTypes.STRING,
  },
  view_departmental_income_report: {
    type: DataTypes.STRING,
  },
  view_departmental_expenses_report: {
    type: DataTypes.STRING,
  },
  view_balance_sheet_report: {
    type: DataTypes.STRING,
  },
  view_payables_aging_report: {
    type: DataTypes.STRING,
  },
  view_supplier_balances_report: {
    type: DataTypes.STRING,
  },
  view_supplier_statement_report: {
    type: DataTypes.STRING,
  },
  donations: {
    type: DataTypes.STRING,
  },
  handle_virtual_patients: {
    type: DataTypes.STRING,
  },
  view_ministry_of_health_reports: {
    type: DataTypes.STRING,
  },
  view_laboratory_price_list: {
    type: DataTypes.STRING,
  },
  view_radiology_price_list: {
    type: DataTypes.STRING,
  },
  view_medicine_price_list: {
    type: DataTypes.STRING,
  },
  delete_appointment: {
    type: DataTypes.STRING,
  },
  view_nhif_rebate_report: {
    type: DataTypes.STRING,
  },
  view_insurance_out_patient_capitation_report: {
    type: DataTypes.STRING,
  },
  set_appointment_individual_limits: {
    type: DataTypes.STRING,
  },
  issue_patient_refunds: {
    type: DataTypes.STRING,
  },
  finalize_invoices: {
    type: DataTypes.STRING,
  },
  reverse_finalized_invoices: {
    type: DataTypes.STRING,
  },
  change_inpatient_admission_date: {
    type: DataTypes.STRING,
  },
  reverse_discharge: {
    type: DataTypes.STRING,
  },
  convert_patient_bills_from_cash_to_corporate_and_vice_versa: {
    type: DataTypes.STRING,
  },
  bill_inpatient_packages: {
    type: DataTypes.STRING,
  },
  change_payment_account_of_admitted_patients: {
    type: DataTypes.STRING,
  },

});

// sequelize.sync()
//   .then(() => {
//     console.log('Models synchronized successfully');
//   })
//   .catch((err) => {
//     console.error('Error synchronizing models:', err);
//   });

module.exports = User_privilege;
