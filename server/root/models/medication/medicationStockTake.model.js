/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Medication_stock_take = sequelize.define('medication_stock_take', {
  medication_stock_take_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  date_of_stock_take: {
    type: DataTypes.STRING,
  },
  medication_id: {
    type: DataTypes.INTEGER,
  },
  medication_name: {
    type: DataTypes.STRING,
  },
  medication_packaging_type_description: {
    type: DataTypes.STRING,
  },
  unit_price: {
    type: DataTypes.INTEGER,
  },
  current_quantity: {
    type: DataTypes.INTEGER,
  },
  correct_quantity: {
    type: DataTypes.INTEGER,
  },
  quantity_variance: {
    type: DataTypes.INTEGER,
  },
  current_quantity_total_price: {
    type: DataTypes.INTEGER,
  },
  variance_total_price: {
    type: DataTypes.INTEGER,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
  medication_category_id: {
    type: DataTypes.STRING,
  },
  hospital_store_id: {
    type: DataTypes.INTEGER,
  },
  expiry_date: {
    type: DataTypes.STRING,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
});

// create the pricelists model
// sequelize.sync().then(()=>{
//     console.log('Book table created')
// }).catch(error=>{
//     console.error('Unable to create table :', error)
// })

module.exports = Medication_stock_take;
