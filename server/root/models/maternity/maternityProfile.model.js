/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Patient_details = require('../patient/patients.models');
// const Appointments = require('../appointment/appointments.models');

const Maternity_profile = sequelize.define('maternity_profile', {
  maternity_profile_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  anc_number: {
    type: DataTypes.STRING,
  },
  name_of_client: {
    type: DataTypes.STRING,
  },
  gravida: {
    type: DataTypes.STRING,
  },
  parity: {
    type: DataTypes.STRING,
  },
  height: {
    type: DataTypes.STRING,
  },
  lmp: {
    type: DataTypes.STRING,
  },
  edd: {
    type: DataTypes.STRING,
  },
  marital_status: {
    type: DataTypes.STRING,
  },
  education: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  telephone: {
    type: DataTypes.STRING,
  },
  occupation: {
    type: DataTypes.STRING,
  },
  next_of_kin: {
    type: DataTypes.STRING,
  },
  next_of_kin_relationship: {
    type: DataTypes.STRING,
  },
  next_of_kin_contacts: {
    type: DataTypes.STRING,
  },
  surgical_operations_history: {
    type: DataTypes.STRING,
  },
  diabetes: {
    type: DataTypes.STRING,
  },
  hypertension: {
    type: DataTypes.STRING,
  },
  blood_transfusion: {
    type: DataTypes.STRING,
  },
  tuberculosis: {
    type: DataTypes.STRING,
  },
  drug_allergies: {
    type: DataTypes.STRING,
  },
  family_history_twins: {
    type: DataTypes.STRING,
  },
  family_history_tuberculosis: {
    type: DataTypes.STRING,
  },
  family_history_diabetes: {
    type: DataTypes.STRING,
  },
  family_history_hypertension: {
    type: DataTypes.STRING,
  },
  patient_id: {
    type: DataTypes.INTEGER,
  },
  appointment_id: {
    type: DataTypes.INTEGER,
  },

});

// Maternity_profile.belongsTo(Patient_details, { foreignKey: 'patient_id' });
// Maternity_profile.belongsTo(Appointments, { foreignKey: 'appointment_id' });

// sequelize.sync().then(() => {
//   console.log('Book table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });

module.exports = Maternity_profile;

// has no classification and status
