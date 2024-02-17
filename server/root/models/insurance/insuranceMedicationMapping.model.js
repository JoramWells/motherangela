/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const Medication = require('../medication/medication.model');
const Insurance_detail = require('./insurance.model');

const Insurance_medication_mapping = sequelize.define('insurance_medication_mappings', {
  mapping_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  insurance_id: {
    type: DataTypes.INTEGER,
  },
  medication_id: {
    type: DataTypes.INTEGER,
  },
  visible: {
    type: DataTypes.STRING,
  },

});

// create the pricelists model
// sequelize.sync().then(()=>{
//     console.log('Book table created')
// }).catch(error=>{
//     console.error('Unable to create table :', error)
// })

Insurance_medication_mapping.belongsTo(Medication, { foreignKey: 'medication_id' });
Insurance_medication_mapping.belongsTo(Insurance_detail, { foreignKey: 'insurance_id' });

module.exports = Insurance_medication_mapping;
