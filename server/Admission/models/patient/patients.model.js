/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Patient_details = sequelize.define('patient_details', {
  patient_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    // defaultValue: UUIDV4,
  },
  in_patient_file_no: {
    type: DataTypes.STRING,
  },
  out_patient_file_no: {
    type: DataTypes.STRING,
  },
  first_name: {
    type: DataTypes.STRING,
  },
  middle_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  patient_gender: {
    type: DataTypes.STRING,
  },
  dob: {
    type: DataTypes.STRING,
  },
  cell_phone: {
    type: DataTypes.STRING,
  },
  nhif_no: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  next_of_kin: {
    type: DataTypes.STRING,
  },
  nxt_of_kin_cell_phone: {
    type: DataTypes.STRING,
  },
  hospital_id: {
    type: DataTypes.STRING,
  },
  patient_type: {
    type: DataTypes.STRING,
  },
  allergies: {
    type: DataTypes.STRING,
  },
  existing_patient: {
    type: DataTypes.STRING,
  },
  month_of_birth: {
    type: DataTypes.STRING,
  },
  staff_number: {
    type: DataTypes.STRING,
  },
  insurance_membership_number: {
    type: DataTypes.STRING,
  },
  residence: {
    type: DataTypes.STRING,
  },
  next_of_kin_name: {
    type: DataTypes.STRING,
  },
  membership_enabled: {
    type: DataTypes.STRING,
  },
  copay_payment_account_id: {
    type: DataTypes.STRING,
  },
  company_id: {
    type: DataTypes.STRING,
  },
  patient_category_id: {
    type: DataTypes.STRING,
  },
  day_of_birth: {
    type: DataTypes.STRING,
  },
  id_number: {
    type: DataTypes.STRING,
  },
  highest_iops: {
    type: DataTypes.STRING,
  },
  cct: {
    type: DataTypes.STRING,
  },
  residence_id: {
    type: DataTypes.STRING,
  },
  principal_member_name: {
    type: DataTypes.STRING,
  },
  old_patient_file_no_inpatient: {
    type: DataTypes.STRING,
  },
});


module.exports = Patient_details;
