/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../../db/connect');
// const Patient_details = require('../patient/patients.models');
const Medication = require('../medication/medication.model');
const Patient_details = require('../patient/patients.models');
// const Appointments2 = require('../appointment/appointments2.models');

const Internal_pharmacy_request2 = sequelize.define('internal_pharmacy_requests', {
  pharmacy_request_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    // defaultValue: UUIDV4,
    unique: true,
    autoIncrement: true,
  },
  appointment_id: {
    type: DataTypes.INTEGER,
  },
  patient_id: {
    type: DataTypes.INTEGER,
  },
  doctor_id: {
    type: DataTypes.INTEGER,
  },
  medication_id: {
    type: DataTypes.INTEGER,
  },
  delivery_status: {
    type: DataTypes.INTEGER,
  },
  cost: {
    type: DataTypes.INTEGER,
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
  pay_status: {
    type: DataTypes.INTEGER,
  },

  prescription_term: {
    type: DataTypes.STRING,
  },
  user_id: {
    type: DataTypes.STRING,
  },
  batch_no: {
    type: DataTypes.STRING,
  },
  date_of_request: {
    type: DataTypes.STRING,
  },

  time_of_request: {
    type: DataTypes.STRING,
  },
  discharge_drug: {
    type: DataTypes.STRING,
  },

  number_of_days: {
    type: DataTypes.INTEGER,
  },
  date_dispensed: {
    type: DataTypes.STRING,
  },
  time_dispensed: {
    type: DataTypes.STRING,
  },
  is_exclusion: {
    type: DataTypes.STRING,
  },

});

// sequelize.sync().then(() => {
//   console.log('Book table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });

Internal_pharmacy_request2.belongsTo(Patient_details, { foreignKey: 'patient_id' });
// Internal_pharmacy_request2.belongsTo(Appointments2, { foreignKey: 'appointment_id' });
Internal_pharmacy_request2.belongsTo(Medication, { foreignKey: 'medication_id' });

module.exports = Internal_pharmacy_request2;
