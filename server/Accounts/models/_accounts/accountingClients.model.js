/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const AccountingAccountDetails = require('./accountingAccountDetails.model');

const AccountingClients = sequelize.define('accounting_clients', {
  client_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  client_name: {
    type: DataTypes.STRING,
  },
  business_location: {
    type: DataTypes.STRING,
  },
  fax: {
    type: DataTypes.STRING,
  },
  mobile: {
    type: DataTypes.STRING,
  },
  email_address: {
    type: DataTypes.STRING,
  },
  term_of_payment_id: {
    type: DataTypes.INTEGER,
  },
  city: {
    type: DataTypes.STRING,
  },
  telephone: {
    type: DataTypes.STRING,
  },
  box_address: {
    type: DataTypes.STRING,
  },
});

AccountingClients.belongsTo(AccountingAccountDetails,{foreignKey:'account_id'})

module.exports = AccountingClients;

// has no classification and status
