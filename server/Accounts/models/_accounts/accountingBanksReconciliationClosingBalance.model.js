/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const AccountingAccountDetails = require('./accountingAccountDetails.model');

const AccountingBanksReconciliationClosingBalance = sequelize.define('accounting_banks_reconciliation_closing_balances', {
  closing_balance_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  account_id: {
    type: DataTypes.INTEGER,
  },
  date_of_closing: {
    type: DataTypes.DATE,
  },
  amount: {
    type: DataTypes.INTEGER,
  },
});

AccountingBanksReconciliationClosingBalance.belongsTo(AccountingAccountDetails,{foreignKey:'account_id'})

module.exports = AccountingBanksReconciliationClosingBalance;

// has no classification and status
