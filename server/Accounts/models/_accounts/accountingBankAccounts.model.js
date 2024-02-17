/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const AccountingGroups = require('./accountingGroup.model');
const AccountingAccountDetails = require('./accountingAccountDetails.model');

const AccountingBankAccounts = sequelize.define('accounting_bank_accounts', {
  bank_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  bank_name: {
    type: DataTypes.STRING,
  },
  account_id: {
    type: DataTypes.INTEGER,
  },
  transaction_charges_percentage: {
    type: DataTypes.STRING,
  },
});

AccountingBankAccounts.belongsTo(AccountingAccountDetails,{foreignKey:'account_id'})

module.exports = AccountingBankAccounts;

// has no classification and status
