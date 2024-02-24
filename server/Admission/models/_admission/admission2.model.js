/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../../db/connect');
const AdmissionCategory = require('./admissionCategory');
const Patient = require('../patient/patients.model');
const Inpatient_case_types = require('../inpatient/inpatientCaseTypes.model');
const Appointments2 = require('../appointment/appointments2.models');
const WardBed = require('../ward/wardBed.model');
const Wards = require('../ward/ward.model');

const Admissions2 = sequelize.define('admissions', {
  admission_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    // defaultValue: UUIDV4,
    autoIncrement: true,
  },
  appointment_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'appointments',
      key: 'appointment_id',
    },
    onDelete: 'CASCADE',

  },
  doctor_id: {
    type: DataTypes.INTEGER,
  },
  patient_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'patient_details',
      key: 'patient_id',
    },
    onDelete: 'CASCADE',
  },
  admission_date: {
    type: DataTypes.STRING,
  },
  admission_time: {
    type: DataTypes.STRING,
  },
  discharge_date: {
    type: DataTypes.STRING,
  },
  discharge_time: {
    type: DataTypes.STRING,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
  ward_id: {
    type: DataTypes.INTEGER,
  },
  bed_id: {
    type: DataTypes.INTEGER,
  },
  admission_charge: {
    type: DataTypes.INTEGER,
  },
  pay_status: {
    type: DataTypes.INTEGER,
  },
  deposit_amount: {
    type: DataTypes.INTEGER,
  },
  clinical_summary: {
    type: DataTypes.STRING,
  },
  diagnosis: {
    type: DataTypes.STRING,
  },
  doctor_admitting: {
    type: DataTypes.STRING,
  },
  review_date: {
    type: DataTypes.STRING,
  },
  hospital_inpatient_id: {
    type: DataTypes.INTEGER,
  },
  admission_type_id: {
    type: DataTypes.INTEGER,
  },
  doctor_ward_rounds_no_of_days: {
    type: DataTypes.STRING,
  },
  discharge_type_id: {
    type: DataTypes.INTEGER,
  },
  inpatient_case_type_id: {
    type: DataTypes.INTEGER,
  },
  daily_bed_rate: {
    type: DataTypes.INTEGER,
  },
  bed_billing_type_id: {
    type: DataTypes.INTEGER,
  },
  daily_nursing_rate: {
    type: DataTypes.INTEGER,
  },
  // daily_nursing_rate_no_days: {
  //   type: DataTypes.INTEGER,
  // },
  daily_bed_rate_number_of_days: {
    type: DataTypes.INTEGER,
  },
  daily_doctor_ward_round_rate: {
    type: DataTypes.INTEGER,

  },
  bill_daily_doctor_ward_round_charges: {
    type: DataTypes.STRING,
  },
  admission_category_id: {
    type: DataTypes.INTEGER,
  },
  maternity_package_service_type_id: {
    type: DataTypes.INTEGER,
  },
  maternity_package_amount: {
    type: DataTypes.INTEGER,
  },
  package_type: {
    type: DataTypes.INTEGER,
  },
});

Admissions2.belongsTo(Wards, { foreignKey: 'ward_id' });
Admissions2.belongsTo(WardBed, { foreignKey: 'bed_id' });
Admissions2.belongsTo(Patient, { foreignKey: 'patient_id' });
Admissions2.belongsTo(
    AdmissionCategory,
    { foreignKey: 'admission_category_id' },
);
Admissions2.belongsTo(Appointments2, { foreignKey: 'appointment_id' });
Admissions2.belongsTo(
    Inpatient_case_types,
    { foreignKey: 'inpatient_case_type_id' },
);

sequelize.sync().then(() => {
  console.log('Adm table created');
}).catch((error) => {
  console.error('Unable to create table :', error);
});

module.exports = Admissions2;

// has no classification and status
