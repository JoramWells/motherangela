/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const AccountingDepartment = require('./accountingDepartment.model');

const AccountingDocumentsClearanceUserPrivileges = sequelize.define('accounting_documents_clearance_user_privileges', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  department_id: {
    type: DataTypes.INTEGER,
  },
  confirm: {
    type: DataTypes.STRING,
  },
  authorize: {
    type: DataTypes.STRING,
  },
  approve: {
    type: DataTypes.STRING,
  },

});

AccountingDocumentsClearanceUserPrivileges.belongsTo(AccountingDepartment, {foreignKey:'department_id'})

module.exports = AccountingDocumentsClearanceUserPrivileges;

// has no classification and status
