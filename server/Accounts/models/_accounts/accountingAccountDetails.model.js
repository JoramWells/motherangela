/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const AccountingGroups = require('./accountingGroup.model');

const AccountingAccountDetails = sequelize.define('accounting_account_details', {
  account_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  account_name: {
    type: DataTypes.STRING,
  },
  account_group_id: {
    type: DataTypes.INTEGER,
  },
  account_code: {
    type: DataTypes.STRING,
  },
  parent_account_id: {
    type: DataTypes.INTEGER,
  },
  is_deletable: {
    type: DataTypes.STRING,
  },
  is_level_one_parent_account: {
    type: DataTypes.STRING,
  },
  department_id: {
    type: DataTypes.INTEGER,
  },
});

AccountingAccountDetails.belongsTo(AccountingGroups,{foreignKey:'account_group_id'})

module.exports = AccountingAccountDetails;

// has no classification and status
