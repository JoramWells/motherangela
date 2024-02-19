/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../../db/connect');

const AccountingBankReconciliation = sequelize.define('accounting_bank_reconciliation', {
  banks_reconciliation_id: {
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
    type: DataTypes.INTEGER,
  },
  opening_balance: {
    type: DataTypes.INTEGER,
  },
  closing_balance: {
    type: DataTypes.INTEGER,
  },
  cleared_withdrawals: {
    type: DataTypes.INTEGER,
  },
  quantity_of_adjustment: {
    type: DataTypes.INTEGER,
  },
  cleared_deposits: {
    type: DataTypes.STRING,
  },
  uncleared_withdrawals: {
    type: DataTypes.INTEGER,
  },
  uncleared_deposits: {
    type: DataTypes.INTEGER,
  },
  tb_balance: {
    type: DataTypes.INTEGER,
  },
});
module.exports = AccountingBankReconciliation;

// has no classification and status
