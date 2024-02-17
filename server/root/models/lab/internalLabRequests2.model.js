/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../../db/connect');
// const Patient_details = require('../patient/patients.models');
const Procedure_detail = require('../procedure/procedureDetails.model');
const Users = require('../user.model');
// const Appointments2 = require('../appointment/appointments2.models');
// const Patient = require('../patient/patient2.models');

const Internal_lab_request2 = sequelize.define('internal_lab_request2s', {
  lab_request_id: {
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
  doctor_id: {
    type: DataTypes.INTEGER,
  },
  procedure_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'procedure_details',
      key: 'procedure_id',
    },
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

// Internal_lab_request2.belongsTo(Appointments2, { foreignKey: 'appointment_id' });
// Internal_lab_request2.belongsTo(Patient, { foreignKey: 'patient_id' });
Internal_lab_request2.belongsTo(Procedure_detail, { foreignKey: 'procedure_id' });
Procedure_detail.belongsTo(Internal_lab_request2, { foreignKey: 'procedure_id' });
Internal_lab_request2.belongsTo(Users, { foreignKey: 'doctor_id', targetKey: 'user_id' });

// sequelize.sync().then(() => {
//   console.log('Book table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });

module.exports = Internal_lab_request2;
