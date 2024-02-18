/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const AccountingAccountDetails = require('./accountingAccountDetails.model');

const ServiceType = sequelize.define('service_types', {
  service_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  service_type_description: {
    type: DataTypes.STRING,
  },
  credit_account_id: {
    type: DataTypes.INTEGER,
  },
  confirmation: {
    type: DataTypes.STRING,
  },
  time_allowed_before_locking_save_functionality: {
    type: DataTypes.INTEGER,
  },
  is_miscellaneous: {
    type: DataTypes.STRING,
  },

});

// create the pricelists model
// sequelize.sync().then(()=>{
//     console.log('Book table created')
// }).catch(error=>{
//     console.error('Unable to create table :', error)
// })

ServiceType.belongsTo(AccountingAccountDetails, {foreignKey:'credit_account_id', targetKey:'account_id'})

module.exports = ServiceType;
