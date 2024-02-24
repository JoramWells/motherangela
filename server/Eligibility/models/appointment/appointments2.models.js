/* eslint-disable indent */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
// const InsuranceDetail = require('../insurance/insuranceDetail.model');
const Patient_details = require('../patient/patient2.models');
// const Patient_details = require('../patient/patients.models');
// const Account_type = require('../accountTypes.model');

const Appointments = sequelize.define('appointments', {
  appointment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  doctor_id: {
    type: DataTypes.INTEGER,
  },
  patient_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'patient_details',
      key: 'patient_id'
    },
    onDelete: 'CASCADE'
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
  vital_signs: {
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
  temperature: {
    type: DataTypes.STRING,
  },
  pulse_rate: {
    type: DataTypes.STRING,
  },
  respiratory_rate: {
    type: DataTypes.STRING,
  },
  systolic: {
    type: DataTypes.STRING,
  },
  diastolic: {
    type: DataTypes.STRING,
  },
  weight: {
    type: DataTypes.STRING,
  },
  height: {
    type: DataTypes.STRING,
  },
  body_mass_index: {
    type: DataTypes.STRING,
  },
  temperature_2: {
    type: DataTypes.STRING,
  },
  pulse_rate_2: {
    type: DataTypes.STRING,
  },
  respiratory_rate_2: {
    type: DataTypes.STRING,
  },
  systolic_2: {
    type: DataTypes.STRING,
  },
  diastolic_2: {
    type: DataTypes.STRING,
  },
  weight_2: {
    type: DataTypes.STRING,
  },
  height_2: {
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
  sp02: {
    type: DataTypes.STRING,
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
  weight_conclusion: {
    type: DataTypes.STRING,
  },
  height_conclusion: {
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

Appointments.belongsTo(Patient_details, { foreignKey: 'patient_id' });
// Appointments.belongsTo(InsuranceDetail, { foreignKey: 'reference_account_id', targetKey: 'insurance_id' });
// Appointments.belongsTo(Account_type, { foreignKey: 'account_type_id' });

// sequelize.sync().then(() => {
//   console.log('Book table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });

module.exports = Appointments;
