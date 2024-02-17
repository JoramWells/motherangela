/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const AccountingJournalTypes = sequelize.define('accounting_journal_types', {
  journal_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  journal_type_description: {
    type: DataTypes.STRING,
  },
});


module.exports = AccountingJournalTypes;

// has no classification and status
