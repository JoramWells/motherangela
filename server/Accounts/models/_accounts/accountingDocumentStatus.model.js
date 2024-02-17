/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const AccountingDocumentStatus = sequelize.define('accounting_document_status', {
  document_status_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  document_status_description: {
    type: DataTypes.STRING,
  },
});


module.exports = AccountingDocumentStatus;

// has no classification and status
