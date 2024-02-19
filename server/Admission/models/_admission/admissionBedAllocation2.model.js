/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../../db/connect');
const Admissions2 = require('./admission2.model');
const Appointments2 = require('../appointment/appointments2.models');
const Patient = require('../patient/patients.model');

const AdmissionsBedAllocation2 = sequelize
    .define('admissions_bed_allocation2', {
      bed_allocation_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
      },
      admission_id: {
        type: DataTypes.UUID,
      },
      appointment_id: {
        type: DataTypes.UUID,
      },
      patient_id: {
        type: DataTypes.UUID,
      },
      ward_id: {
        type: DataTypes.INTEGER,
      },
      bed_id: {
        type: DataTypes.INTEGER,
      },
      admission_date: {
        type: DataTypes.STRING,
      },
      discharge_date: {
        type: DataTypes.STRING,
      },
      ward_charges: {
        type: DataTypes.INTEGER,
      },

    });

AdmissionsBedAllocation2.belongsTo(
    Admissions2,
    { foreignKey: 'admission_id' },
);
AdmissionsBedAllocation2.belongsTo(
    Appointments2,
    { foreignKey: 'appointment_id' },
);
AdmissionsBedAllocation2.belongsTo(
    Patient,
    { foreignKey: 'patient_id' },
);

// sequelize.sync().then(() => {
//   console.log('Bed Allocation table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });

module.exports = AdmissionsBedAllocation2;

// has no classification and status
