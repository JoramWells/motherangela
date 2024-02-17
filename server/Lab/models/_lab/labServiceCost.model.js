/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const LabServiceCost = sequelize.define('labServiceCost', {
  lab_service_cost_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  service_category: {
    type: DataTypes.STRING,
  },
  service_name: {
    type: DataTypes.INTEGER,
    // type: DataTypes.INTEGER,

  },
  service_cost_cash: {
    type: DataTypes.STRING,
  },
  user_name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
  hospital_id: {
    type: DataTypes.STRING,
  },
  navigation_style: {
    type: DataTypes.STRING,
  },
  consultation_income_percentage: {
    type: DataTypes.STRING,
  },
  procedure_income_percentage: {
    type: DataTypes.STRING,
  },
});

// create the pricelists model
// sequelize.sync().then(()=>{
//     console.log('Book table created')
// }).catch(error=>{
//     console.error('Unable to create table :', error)
// })

module.exports = LabServiceCost;
