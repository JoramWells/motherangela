/* eslint-disable camelcase */
const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../../db/connect');
const Appointments = require('../appointment/appointments2.models');
const Patient_details = require('../patient/patient2.models');

const Eligibility = sequelize.define('eligibility', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  appointment_id: {
    type: DataTypes.INTEGER,
  },
  patient_id: {
    type: DataTypes.INTEGER,
  },
  isTested: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: new Date('1998-02-09'),
  },
  result: {
    type: DataTypes.STRING,
  },
  keyPopulation: {
    type: DataTypes.STRING,
  },
  tbScreening: {
    type: DataTypes.STRING,
  },
  gbvScreening: {
    type: DataTypes.STRING,
  },
  eligible: {
    type: DataTypes.STRING,
  },
  reason: {
    type: DataTypes.STRING,
  },
  tested: {
    type: DataTypes.STRING,
  },

});

Eligibility.belongsTo(Appointments, { foreignKey: 'appointment_id' });
Appointments.hasMany(Eligibility,{foreignKey:'appointment_id'})
Eligibility.belongsTo(Patient_details, { foreignKey: 'patient_id' });

sequelize.sync().then(() => {
  console.log('Eligible Table create');
}).catch((error) => {
  console.error('Unable to create table :', error);
});

module.exports = Eligibility;
