/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../../db/connect');
const AccountingAccountDetails = require('../accountingAccountDetails.model');

const AccountingBankAccounts = sequelize.define('accounting_bank_accounts', {
  bank_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  account_id: {
    type: DataTypes.STRING,
  },
  bank_name: {
    type: DataTypes.STRING,
  },
  transaction_charges_percentage: {
    type: DataTypes.INTEGER,
  },
});

AccountingBankAccounts.belongsTo(AccountingAccountDetails, {foreignKey:'account_id'})

module.exports = AccountingBankAccounts;

// has no classification and status
