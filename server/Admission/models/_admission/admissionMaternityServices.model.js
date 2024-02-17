/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const Patient = require('../patient/patients.model');
const Appointments2 = require('../appointment/appointments2.models');
// const Patient_details = require('../pa');

const Admissions_maternity_services = sequelize.define('admissions_maternity_services', {
  admissions_maternity_service_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  admission_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'admissions2',
      key: 'admission_id',
    },
    onDelete: 'CASCADE',

  },
  appointment_id: {
    type: DataTypes.UUID,
    references: {
      model: 'appointments2',
      key: 'appointment_id',
    },
    onDelete: 'CASCADE',

  },
  patient_id: {
    type: DataTypes.UUID,
    references: {
      model: 'patient',
      key: 'patient_id',
    },
  },
  date_of_delivery: {
    type: DataTypes.STRING,
  },
  normal_delivery: {
    type: DataTypes.STRING,
  },
  caesarean_section: {
    type: DataTypes.STRING,
  },
  breech_delivery: {
    type: DataTypes.STRING,
  },
  assisted_vaginal_delivery: { type: DataTypes.STRING },
  born_before_arrival: {
    type: DataTypes.STRING,
  },
  maternal_death: {
    type: DataTypes.STRING,
  },
  maternal_death_audited: {
    type: DataTypes.STRING,
  },
  live_birth: {
    type: DataTypes.STRING,
  },
  still_birth: {
    type: DataTypes.STRING,
  },
  neonatal_death: {
    type: DataTypes.STRING,
  },
  low_birth_weight_baby: {
    type: DataTypes.STRING,
  },
  new_born_discharged: {
     type: DataTypes.STRING,
    },
  hospital_id: {
     type: DataTypes.STRING,
     },
  user_id: {
    type: DataTypes.INTEGER,
  },
  fresh_still_birth: {
    type: DataTypes.STRING,
  },
  macerated_still_birth: {
    type: DataTypes.STRING,
  },
  birth_with_deformities: {
    type: DataTypes.STRING,
  },
  low_apgar_score: {
    type: DataTypes.STRING,
  },

  // rows remaining

});
Admissions_maternity_services.belongsTo(Patient, { foreignKey: 'patient_id' });
Admissions_maternity_services.belongsTo(Patient, { foreignKey: 'patient_id' });
Admissions_maternity_services.belongsTo(Appointments2, { foreignKey: 'appointment_id' });

// Patient_details.hasMany(Admissions_maternity_services, { foreignKey: 'patient_id' });

// sequelize.sync().then(() => {
//   console.log('Book table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });

module.exports = Admissions_maternity_services;

// has no classification and status
