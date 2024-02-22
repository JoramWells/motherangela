/* eslint-disable camelcase */
const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../../db/connect');
const Appointments2 = require('../_appointment/appointments2.models');
const Patient_details = require('../patient/patients.models');

const VitalSigns = sequelize.define('vitalSigns', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  appointment_id: {
    type: DataTypes.UUID,
  },
  patient_id: {
    type: DataTypes.UUID,
  },
  temperature: {
    type: DataTypes.STRING,
  },
  pulseRate: {
    type: DataTypes.STRING,
  },
  respiratoryRate: {
    type: DataTypes.STRING,
  },
  systolic: {
    type: DataTypes.STRING,
  },
  diastolic: {
    type: DataTypes.STRING,
  },
  weight: {
    type: DataTypes.STRING,
  },
  height: {
    type: DataTypes.STRING,
  },
  bmi: {
    type: DataTypes.STRING,
  },
  sp02: {
    type: DataTypes.STRING,
  },

});

VitalSigns.belongsTo(Appointments2, { foreignKey: 'appointment_id' });
Appointments2.hasMany(VitalSigns,{foreignKey:'appointment_id'})
VitalSigns.belongsTo(Patient_details, { foreignKey: 'patient_id' });

// sequelize.sync().then(() => {
//   console.log('Vital Signs table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });

module.exports = VitalSigns;
