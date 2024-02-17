/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const AccountingAccountDetails = require('./accountingAccountDetails.model');

const AccountingBanksReconciliationWithdrawal = sequelize.define('accounting_banks_reconciliation_withdrawals', {
  uncleared_withdrawal_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  account_id: {
    type: DataTypes.INTEGER,
  },
  start_date: {
    type: DataTypes.DATE,
  },
  end_date: {
    type: DataTypes.DATE,
  },
  transaction_date: {
    type: DataTypes.DATE,
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
    type: DataTypes.STRING,
  },
  temporarily_cleared_after_BY: {
    type: DataTypes.INTEGER,
  },
});

AccountingBanksReconciliationWithdrawal.belongsTo(AccountingAccountDetails,{foreignKey:'account_id'})

module.exports = AccountingBanksReconciliationWithdrawal;

// has no classification and status
