/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../../db/connect');
const Patient = require('../patient/patients.model');
const InsuranceDetail = require('../insurance/insuranceDetail.model');
const Users = require('../user/user.model');

const Appointments2 = sequelize.define('appointments2', {
  appointment_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  doctor_id: {
    type: DataTypes.INTEGER,
  },
  patient_id: {
    type: DataTypes.UUID,
    references: {
      model: 'patient',
      key: 'patient_id',
    },
    onDelete: 'CASCADE',
  },
  appointment_date: {
    type: DataTypes.STRING,
  },
  appointment_time: {
    type: DataTypes.STRING,
  },
  appointment_status: {
    type: DataTypes.STRING,
  },
  consultation_type: {
    type: DataTypes.INTEGER,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
  charges: {
    type: DataTypes.INTEGER,
  },
  payment_status: {
    type: DataTypes.INTEGER,
  },
  account_type_id: {
    type: DataTypes.INTEGER,
  },
  reference_account_id: {
    type: DataTypes.INTEGER,
  },
  admission_status: {
    type: DataTypes.STRING,
  },
  patient_registration_charge: {
    type: DataTypes.INTEGER,
  },
  nhif_applicability: {
    type: DataTypes.STRING,
  },
  patient_monitoring_notes: {
    type: DataTypes.STRING,
  },
  nhif_claim_number: {
    type: DataTypes.STRING,
  },
  nhif_rebate_amount: {
    type: DataTypes.STRING,
  },
  consultation_group_id: {
    type: DataTypes.INTEGER,
  },
  company_id: {
    type: DataTypes.INTEGER,
  },
  nhif_rebate_number_of_applicable_days: {
    type: DataTypes.STRING,
  },
  consultation_type_sub_group_id: {
    type: DataTypes.STRING,
  },
  referral_type_id: {
    type: DataTypes.INTEGER,
  },
  muac_for_infants: {
    type: DataTypes.STRING,
  },
  clinic_id: {
    type: DataTypes.STRING,
  },
  total_appointment_discount: {
    type: DataTypes.INTEGER,
  },
  insurance_limit_type_id: {
    type: DataTypes.INTEGER,
  },
  maximum_billable_amount: {
    type: DataTypes.INTEGER,
  },
  invoice_no: {
    type: DataTypes.STRING,
  },
  claim_number: {
    type: DataTypes.STRING,
  },

}, { timestamps: false });

Appointments2.belongsTo(Patient, { foreignKey: 'patient_id' });
Appointments2.belongsTo(Users, { foreignKey: 'doctor_id', targetKey: 'user_id' });
// Patient.hasMany(Appointments2, { foreignKey: 'patient_id' });
Appointments2.belongsTo(InsuranceDetail, { foreignKey: 'reference_account_id', targetKey: 'insurance_id' });

// sequelize.sync().then(() => {
//   console.log('Book table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });

module.exports = Appointments2;
