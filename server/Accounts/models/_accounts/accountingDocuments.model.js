/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const AccountingAssetCategory = require('./accountingAssetCategory.model');
const AccountingAssetLocation = require('./accountingAssetLocation.model');
const AccountingAssetStatus = require('./accountingAssetStatus.model');

const AccountingDocuments = sequelize.define('accounting_assets', {
  document_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  document_type_id: {
    type: DataTypes.INTEGER,
  },
  client_id: {
    type: DataTypes.INTEGER,
  },
  date_of_document: {
    type: DataTypes.DATE,
  },
  document_number: {
    type: DataTypes.STRING,
  },
  reference: {
    type: DataTypes.STRING,
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  no_of_days_due: {
    type: DataTypes.INTEGER,
  },
  store_id: {
    type: DataTypes.STRING,
  },
  item_id: {
    type: DataTypes.INTEGER,
  },
  item_code: {
    type: DataTypes.STRING,
  },
  item_description: {
    type: DataTypes.STRING,
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  unit_price: {
    type: DataTypes.INTEGER,
  },
  tax_id: {
    type: DataTypes.INTEGER,
  },
  tax_amount: {
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.INTEGER,
  },
  serial: {
    type: DataTypes.STRING,
  },
  amount_inclusive_of_tax: {
    type: DataTypes.STRING,
    defaultValue: 'NO'
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
  document_status_id: {
    type: DataTypes.INTEGER,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
  full_item_description: {
    type: DataTypes.STRING,
  },
  document_message: {
    type: DataTypes.STRING,
  },
  department_id: {
    type: DataTypes.INTEGER,
  },
  confirmed_or_passed_by: {
    type: DataTypes.INTEGER,
  },
  authorized_by: {
    type: DataTypes.INTEGER,
  },
  approved_by: {
    type: DataTypes.STRING,
  },
  date_confirmed_or_passed: {
    type: DataTypes.STRING,
  },
  date_authorized: {
    type: DataTypes.STRING,
  },
  date_approved: {
    type: DataTypes.STRING,
  },
  time_confirmed_or_passed: {
    type: DataTypes.STRING,
  },
  time_authorized: {
    type: DataTypes.STRING,
  },
  time_approved: {
    type: DataTypes.STRING,
  },
  percentage_discount: {
    type: DataTypes.INTEGER,
  },
  discount_amount: {
    type: DataTypes.INTEGER,
  },
  cleared: {
    type: DataTypes.STRING,
  },
  cleared_by: {
    type: DataTypes.INTEGER,
  },
  discount_id_reference: {
    type: DataTypes.STRING,
  },
  serial_reference: {
    type: DataTypes.STRING,
  },
  unit_of_measurement: {
    type: DataTypes.STRING,
  },
  brand_name: {
    type: DataTypes.STRING,
  },
  last_edited_by: {
    type: DataTypes.INTEGER,
  },
  finalized_by: {
    type: DataTypes.INTEGER,
  },
  date_of_finalization: {
    type: DataTypes.STRING,
  },
  sub_item_id: {
    type: DataTypes.INTEGER,
  },
  sub_document_type_id: {
    type: DataTypes.INTEGER,
  },
  account_id: {
    type: DataTypes.INTEGER,
  },
  client_name: {
    type: DataTypes.STRING,
  },
  document_number_source: {
    type: DataTypes.STRING,
  },
  cash_given: {
    type: DataTypes.STRING,
  },
  receiving_bank_account_id: {
    type: DataTypes.INTEGER,
  },
  reference_serial: {
    type: DataTypes.STRING,
  },
  reference_receiving_bank_account_id: {
    type: DataTypes.INTEGER,
  },
  maximum_quantity_returnable: {
    type: DataTypes.INTEGER,
  },
  date_of_transaction: {
    type: DataTypes.STRING,
  },
  time_of_transaction: {
    type: DataTypes.STRING,
  },
  project_id: {
    type: DataTypes.INTEGER,
  },
  sub_client_id: {
    type: DataTypes.INTEGER,
  },
  reorder_level: {
    type: DataTypes.INTEGER,
  },
  available_quantity: {
    type: DataTypes.INTEGER,
  },
  recommended_quantity: {
    type: DataTypes.INTEGER,
  },
  quantity_authorized_to_be_issued: {
    type: DataTypes.STRING,
  },
  quantities_to_be_issued_defined: {
    type: DataTypes.STRING,
  },
  quantities_to_be_issued_last_defined_by: {
    type: DataTypes.INTEGER,
  },
  item_issued_to_project_date_of_invoice: {
    type: DataTypes.STRING,
  },
  item_issued_to_project_store_id: {
    type: DataTypes.STRING,
  },
  item_requisition_issuing_store_id: {
    type: DataTypes.INTEGER,
  },
  notification_shown: {
    type: DataTypes.STRING,
  },
  quantity_issued_less_returned: {
    type: DataTypes.STRING,
  },
  sold_by: {
    type: DataTypes.INTEGER,
  },
  expected_date_of_payment: {
    type: DataTypes.STRING,
  },
  gate_pass_printed: {
    type: DataTypes.STRING,
  },
  delivery_note_printed: {
    type: DataTypes.STRING,
  },
  item_serial_number: {
    type: DataTypes.STRING,
  }, 
  transaction_complete: {
    type: DataTypes.STRING,
    defaultValue: 'NO'
  }, 
  user_shift_id: {
    type: DataTypes.INTEGER,
  },
  client_number_for_the_shift: {
    type: DataTypes.STRING,
  },
  is_finalized: {
    type: DataTypes.STRING,
  },
  date_created: {
    type: DataTypes.STRING,
  },
  time_created: {
    type: DataTypes.STRING,
  },


});

AccountingDocuments.belongsTo(AccountingAssetCategory, { foreignKey: 'asset_category_id' })
AccountingDocuments.belongsTo(AccountingAssetLocation, { foreignKey: 'asset_location_id' })
AccountingDocuments.belongsTo(AccountingAssetStatus, { foreignKey: 'asset_status_id' })

module.exports = AccountingDocuments;

// has no classification and status
