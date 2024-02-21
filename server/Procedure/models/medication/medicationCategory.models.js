/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Medication_category = sequelize.define('medication_category', {
  category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  category_name: {
    type: DataTypes.STRING,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
  credit_account_id: {
    type: DataTypes.INTEGER,
  },
});

// create the pricelists model
// sequelize.sync().then(()=>{
//     console.log('Book table created')
// }).catch(error=>{
//     console.error('Unable to create table :', error)
// })

module.exports = Medication_category;
