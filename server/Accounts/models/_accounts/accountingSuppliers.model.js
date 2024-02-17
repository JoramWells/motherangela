/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Accounting_supplier = sequelize.define('accounting_suppliers', {
  supplier_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  supplier_name: {
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
module.exports = Accounting_supplier;

// has no classification and status
