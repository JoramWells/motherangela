/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../../db/connect');

const AccountingBankReconciliationClosingBalances = sequelize.define('accounting_bank_reconciliation_closing_balances', {
  closing_balance_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  account_id: {
    type: DataTypes.STRING,
  },
  date_of_closing: {
    type: DataTypes.STRING,
  },
  amount: {
    type: DataTypes.INTEGER,
  },
});
module.exports = AccountingBankReconciliationClosingBalances;

// has no classification and status
