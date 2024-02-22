/* eslint-disable camelcase */
const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../../db/connect');
const Patient = require('../patient/patients.models');
const Patient_details = require('../patient/patients.models');

const PersonalAccountCharge = sequelize.define('personal_account_charge', {
  personal_account_charge_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  patient_id: {
    type: DataTypes.UUID,
  },
  charge_no: {
    type: DataTypes.STRING,
  },
  amount: {
    type: DataTypes.STRING,
  },
  service_desc: {
    type: DataTypes.STRING,
  },
  appointment_id: {
    type: DataTypes.UUID,
  },
  date_of_charge: {
    type: DataTypes.STRING,
  },
  time_of_charge: {
    type: DataTypes.STRING,
  },
  reference_account_id: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.INTEGER,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
  service_id: {
    type: DataTypes.INTEGER,
  },
  service_type_id: {
    type: DataTypes.INTEGER,
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  percentage_discount: {
    type: DataTypes.INTEGER,
  },
  amount_before_discount: {
    type: DataTypes.INTEGER,
  },
  discount_reason: {
    type: DataTypes.STRING,
  },
  is_copay: {
    type: DataTypes.STRING,
  },
  total_charge_amount: {
    type: DataTypes.INTEGER,
  },
  total_amount_paid: {
    type: DataTypes.INTEGER,
  },
  patient_full_name_pac: {
    type: DataTypes.STRING,
  },
  admission_status: {
    type: DataTypes.STRING,
  },
  patient_id_pac: {
    type: DataTypes.INTEGER,
  },
  seen_by_consultant: {
    type: DataTypes.STRING,
  },
  doctor_name: {
    type: DataTypes.STRING,
  },
  clinic_id: {
    type: DataTypes.STRING,
  },
  clinic_name: {
    type: DataTypes.STRING,
  },
}, { timestamps: false });

// sequelize.sync().then(() => {
//   console.log('Book table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });
PersonalAccountCharge.belongsTo(Patient_details, { foreignKey: 'patient_id_pac' });

module.exports = PersonalAccountCharge;
