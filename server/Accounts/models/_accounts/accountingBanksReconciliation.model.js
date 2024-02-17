/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const AccountingAccountDetails = require('./accountingAccountDetails.model');

const AccountingBanksReconciliation = sequelize.define('accounting_assets', {
  bank_reconciliation_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  account_id: {
    type: DataTypes.STRING,
  },
  start_date: {
    type: DataTypes.DATE,
  },
  end_date: {
    type: DataTypes.DATE,
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
  cleared_deposits: {
    type: DataTypes.INTEGER,
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

AccountingBanksReconciliation.belongsTo(AccountingAccountDetails, { foreignKey: 'account_id' })

module.exports = AccountingBanksReconciliation;

// has no classification and status
