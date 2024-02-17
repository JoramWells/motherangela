/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const Medication = require('./medication.model');

const Medicine_purchase = sequelize.define('medicine_purchases', {
  purchase_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  supplier_id: {
    type: DataTypes.INTEGER,
  },
  medication_id: {
    type: DataTypes.INTEGER,
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  date_of_receipt: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  receipt_no: {
    type: DataTypes.STRING,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
  batch_no: {
    type: DataTypes.STRING,
  },
  real_quantity: {
    type: DataTypes.STRING,
  },
  medication_purchase_type_id: {
    type: DataTypes.INTEGER,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
  percentage_discount: {
    type: DataTypes.INTEGER,
  },
  hospital_store_id: {
    type: DataTypes.INTEGER,
  },
  expiry_date: {
    type: DataTypes.STRING,
  },
  tax_percentage: {
    type: DataTypes.INTEGER,
  },
  bonus: {
    type: DataTypes.INTEGER,
  },
  serial: {
    type: DataTypes.STRING,
  },
  real_bonus: {
    type: DataTypes.INTEGER,
  },
  purchase_order_number: {
    type: DataTypes.STRING,
  },
});

// create the pricelists model
// sequelize.sync().then(()=>{
//     console.log('Book table created')
// }).catch(error=>{
//     console.error('Unable to create table :', error)
// })

Medicine_purchase.belongsTo(Medication, { foreignKey: 'medication_id' });

module.exports = Medicine_purchase;
