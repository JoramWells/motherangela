/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../../db/connect');

const AccountingBankReconciliationDeposits = sequelize.define('accounting_bank_reconciliation_deposits', {
  uncleared_deposits: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  account_id: {
    type: DataTypes.STRING,
  },
  start_date: {
    type: DataTypes.STRING,
  },
  end_date: {
    type: DataTypes.STRING,
  },
  transaction_date: {
    type: DataTypes.STRING,
  },
  cheque_number: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  amount: {
    type: DataTypes.INTEGER,
  },
  cleared: {
    type: DataTypes.STRING,
  },
  temporarily_cleared_after: {
    type: DataTypes.INTEGER,
  },
  temporarily_cleared_after_by: {
    type: DataTypes.INTEGER,
  },
});
module.exports = AccountingBankReconciliationDeposits;

// has no classification and status
