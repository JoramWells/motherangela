/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const HospitalStores = require('../hospital/hospitalStores.model');
const AccountingStoreTypes = require('./accountingStoreTypes.model');

const AccountingStores = sequelize.define('accounting_stores', {
  store_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  store_description: {
    type: DataTypes.STRING,
  },
  store_type_id: {
    type: DataTypes.INTEGER,
  },
  hospital_store_id: {
    type: DataTypes.INTEGER,
  },
});

AccountingStores.belongsTo(HospitalStores, { foreignKey: 'hospital_store_id' })
AccountingStores.belongsTo(AccountingStoreTypes, { foreignKey:'store_type_id'})


module.exports = AccountingStores;

// has no classification and status
