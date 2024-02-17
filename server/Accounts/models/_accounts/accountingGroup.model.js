/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const AccountingGroups = sequelize.define('accounting_groups', {
  account_group_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  account_group_description: {
    type: DataTypes.STRING,
  },
  parent_account_group_id: {
    type: DataTypes.INTEGER,
  },
});
module.exports = AccountingGroups;

// has no classification and status
