/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const Patient_details = require('../patient/patients.models');
const Procedure_detail = require('../procedure/procedureDetails.model');
const Users = require('../user/user.model');
// const Appointments = require('../appointment/appointments.models');

const Internal_lab_request = sequelize.define('internal_lab_requests', {
  lab_request_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
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
  procedure_id: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.INTEGER,
  },
  cost: {
    type: DataTypes.INTEGER,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
  pay_status: {
    type: DataTypes.INTEGER,
  },
  results: {
    type: DataTypes.STRING,
  },

});

// Internal_lab_request.belongsTo(Appointments, { foreignKey: 'appointment_id' });
// Internal_lab_request.belongsTo(Patient_details, { foreignKey: 'patient_id' });
Internal_lab_request.belongsTo(Procedure_detail, { foreignKey: 'procedure_id' });
Internal_lab_request.belongsTo(Users, { foreignKey: 'doctor_id', targetKey: 'user_id' });

module.exports = Internal_lab_request;
