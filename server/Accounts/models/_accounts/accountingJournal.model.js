/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const AccountingAccountDetails = require('./accountingAccountDetails.model');

const AccountingJournal = sequelize.define('accounting_journal', {
  journal_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  date_of_journal: {
    type: DataTypes.STRING,
  },
  account_id: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
  debit: {
    type: DataTypes.INTEGER,
  },
  credit: {
    type: DataTypes.INTEGER,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
  journal_type_id: {
    type: DataTypes.INTEGER,
  },
  contact: {
    type: DataTypes.INTEGER,
  },
  reference: {
    type: DataTypes.INTEGER,
  },
  serial: {
    type: DataTypes.STRING,
  },
  tax_id: {
    type: DataTypes.INTEGER,
  },
  cleared: {
    type: DataTypes.STRING,
  },
  cleared: {
    type: DataTypes.STRING,
  },
  cleared_by: {
    type: DataTypes.STRING,
  },
  sub_account_id: {
    type: DataTypes.STRING,
  },
  voucher_number: {
    type: DataTypes.STRING,
  },
  appointment_id: {
    type: DataTypes.STRING,
  },
  patient_id: {
    type: DataTypes.STRING,
  },
  clinic_id: {
    type: DataTypes.STRING,
  },
});

AccountingJournal.belongsTo(AccountingAccountDetails,{foreignKey:'account_id'})

module.exports = AccountingJournal;

// has no classification and status
