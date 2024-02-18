/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const ConsultationGroupsWithCreditAccount = sequelize.define('consultation_groups_with_credit_accounts', {
  consultation_group_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  consultation_group_description: {
    type: DataTypes.STRING,
  },
  credit_account_id: {
    type: DataTypes.INTEGER,
  },
  display: {
    type: DataTypes.STRING,
  },
});
module.exports = ConsultationGroupsWithCreditAccount;

// has no classification and status
