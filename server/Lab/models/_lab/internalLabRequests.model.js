/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const Patient_details = require('../patient/patients.models');
const Procedure_detail = require('../procedure/procedureDetails.model');
const Users = require('../user/user.model');
const Appointments = require('../appointment/appointments.model');

const InternalLabRequests = sequelize.define('internal_lab_requests', {
  lab_request_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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

InternalLabRequests.belongsTo(Appointments, { foreignKey: 'appointment_id' });
InternalLabRequests.belongsTo(Patient_details, { foreignKey: 'patient_id' });
InternalLabRequests.belongsTo(Procedure_detail, { foreignKey: 'procedure_id' });
InternalLabRequests.belongsTo(Users, { foreignKey: 'doctor_id', targetKey: 'user_id' });

module.exports = InternalLabRequests;
