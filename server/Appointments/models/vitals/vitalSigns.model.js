/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../../db/connect');
const Patient_details = require('../patient/patients.models');
const Appointments = require('../_appointment/appointments.model');

const VitalSigns = sequelize.define('vitalSigns', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  appointment_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  patient_id: {
    type: DataTypes.INTEGER,
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

// VitalSigns.belongsTo(Appointments, { foreignKey: 'appointment_id' });
// Appointments.hasMany(VitalSigns, { foreignKey: 'appointment_id' });
// VitalSigns.belongsTo(Patient_details, { foreignKey: 'patient_id' });

// sequelize.sync().then(() => {
//   console.log('Vital Signs table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });

module.exports = VitalSigns;
