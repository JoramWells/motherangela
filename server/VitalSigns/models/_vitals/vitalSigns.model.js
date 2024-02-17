/* eslint-disable camelcase */
const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../../db/connect');
const Appointments2 = require('../_appointment/appointments2.models');
const Patient = require('../patient/patient2.models');

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
    type: DataTypes.INTEGER,
  },
  pulseRate: {
    type: DataTypes.INTEGER,
  },
  respiratoryRate: {
    type: DataTypes.INTEGER,
  },
  systolic: {
    type: DataTypes.INTEGER,
  },
  diastolic: {
    type: DataTypes.INTEGER,
  },
  weight: {
    type: DataTypes.INTEGER,
  },
  height: {
    type: DataTypes.INTEGER,
  },
  bmi: {
    type: DataTypes.INTEGER,
  },
  sp02: {
    type: DataTypes.INTEGER,
  },

});

VitalSigns.belongsTo(Appointments2, { foreignKey: 'appointment_id' });
VitalSigns.belongsTo(Patient, { foreignKey: 'patient_id' });

sequelize.sync().then(() => {
  console.log('Vital Signs table created');
}).catch((error) => {
  console.error('Unable to create table :', error);
});

module.exports = VitalSigns;
