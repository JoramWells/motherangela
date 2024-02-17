/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const AccountingDocumentTypes = sequelize.define('accounting_document_types', {
  document_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  document_type_description: {
    type: DataTypes.STRING,
  },
  document_category_description: {
    type: DataTypes.INTEGER,
  },
});


module.exports = AccountingDocumentTypes;

// has no classification and status
