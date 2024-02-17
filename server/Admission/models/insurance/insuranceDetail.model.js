/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const InsuranceDetail = sequelize.define('insurance_details', {
  insurance_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  insurance_name: {
    type: DataTypes.STRING,
  },
  box_address: {
    type: DataTypes.STRING,
  },
  phone_no: {
    type: DataTypes.STRING,
  },
  email_address: {
    type: DataTypes.STRING,
  },
  payment_percentage_out_patient: {
    type: DataTypes.INTEGER,
  },
  payment_percentage_in_patient: {
    type: DataTypes.INTEGER,
  },
  nhif_rebate: {
    type: DataTypes.INTEGER,
  },
  withholding_tax_application: {
    type: DataTypes.STRING,
  },
  discount_percentage: {
    type: DataTypes.INTEGER,
  },
  full_discount_on_all_services: {
    type: DataTypes.STRING,
  },
  insurance_type_id: {
    type: DataTypes.INTEGER,
  },
  insurance_limit_type_id: {
    type: DataTypes.INTEGER,
  },
  maximum_billable_amount: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.INTEGER,
  },
  revenue_expected: {
    type: DataTypes.INTEGER,
  },
  requires_claim_number: {
    type: DataTypes.STRING,
  },
});

// create the pricelists model
// sequelize.sync().then(()=>{
//     console.log('Book table created')
// }).catch(error=>{
//     console.error('Unable to create table :', error)
// })

module.exports = InsuranceDetail;
