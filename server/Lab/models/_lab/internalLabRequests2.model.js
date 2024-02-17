/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../../db/connect');
// const Patient_details = require('../patient/patients.models');
const Procedure_detail = require('../procedure/procedureDetails.model');
const Users = require('../user/user.model');
const Patient = require('../patient/patients.models');
const Appointments2 = require('../appointment/appointments2.models');
// const Appointments2 = require('../appointment/appointments2.models');
// const Patient = require('../patient/patient2.models');

const InternalLabRequests = sequelize.define('internal_lab_request2s', {
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
    // references: {
    //   model: 'procedure_details',
    //   key: 'procedure_id',
    // },
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
  user_id:{
    type:DataTypes.INTEGER
  },
  service_type_id:{
    type:DataTypes.INTEGER
  },
  quantity: {
    type: DataTypes.INTEGER
  },
  request_reference: {
    type: DataTypes.STRING
  },
  microscopy: {
    type: DataTypes.STRING
  },
  flag: {
    type: DataTypes.STRING
  },
  specimen_type_id: {
    type: DataTypes.INTEGER
  },
  date_of_request: {
    type: DataTypes.DATE
  },
  time_of_request: {
    type: DataTypes.STRING
  },
  requests_posting_locked: {
    type: DataTypes.STRING
  },
  notes: {
    type: DataTypes.STRING
  },
  results_status_id: {
    type: DataTypes.INTEGER
  },
  urgent: {
    type: DataTypes.STRING
  },
  date_of_results: {
    type: DataTypes.DATE
  },
  time_of_results: {
    type: DataTypes.STRING
  },
  is_referral: {
    type: DataTypes.STRING
  },
  referral_supplier_id: {
    type: DataTypes.INTEGER
  },
  procedure_performed: {
    type: DataTypes.STRING
  },
  operation_category_id: {
    type: DataTypes.INTEGER
  },
  operation_sub_category_id: {
    type: DataTypes.INTEGER
  },
  specimen_referral_type_id: {
    type: DataTypes.INTEGER
  },
  hiv_service_id: {
    type: DataTypes.INTEGER
  },
  procedure_performed_by: {
    type: DataTypes.INTEGER
  },
  is_exclusion: {
    type: DataTypes.STRING
  },

});

InternalLabRequests.belongsTo(Appointments2, { foreignKey: 'appointment_id' });
InternalLabRequests.belongsTo(Patient, { foreignKey: 'patient_id' });
InternalLabRequests.belongsTo(Procedure_detail, { foreignKey: 'procedure_id' });
InternalLabRequests.belongsTo(Users, { foreignKey: 'doctor_id', targetKey: 'user_id' });

sequelize.sync().then(() => {
  console.log('Lab table created');
}).catch((error) => {
  console.error('Unable to create table :', error);
});

module.exports = InternalLabRequests;
