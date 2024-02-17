/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Medication_purchase_type = sequelize.define('medication_purchase_types', {
  medication_purchase_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  medication_purchase_type_description: {
    type: DataTypes.STRING,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
});

// create the pricelists model
// sequelize.sync().then(()=>{
//     console.log('Book table created')
// }).catch(error=>{
//     console.error('Unable to create table :', error)
// })

module.exports = Medication_purchase_type;
