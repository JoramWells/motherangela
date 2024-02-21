/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Medication_packaging_type = sequelize.define('medication_packaging_types', {
  medication_packaging_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  package_description: {
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

module.exports = Medication_packaging_type;
