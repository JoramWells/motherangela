/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const Out_patient_services_child_health_information = sequelize
  .define('out_patient_services_child_health_information', {
    out_patient_services_chi_health_id:
    {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    appointment_id:
    {
      type: DataTypes.INTEGER,
    },
    patient_id:
    {
      type: DataTypes.INTEGER,
    },
    infant_has_kwashiorkor:
    {
      type: DataTypes.STRING,
    },
    infant_has_marasmus:
    {
      type: DataTypes.STRING,
    },
    infant_has_faltering_growth:
    {
      type: DataTypes.STRING,
    },
    infant_has_received_exclusive_breast_feeding:
    {
      type: DataTypes.STRING,
    },
    infant_has_been_dewormed:
    {
      type: DataTypes.STRING,
    },
    infant_given_mnps_supplements:
    {
      type: DataTypes.STRING,
    },
    infant_has_disability:
    {
      type: DataTypes.STRING,
    },

  });

// sequelize.sync().then(() => {
//   console.log('Book table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });

module.exports = Out_patient_services_child_health_information;
