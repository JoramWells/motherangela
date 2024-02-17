/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Admissions_bed_allocation = sequelize.define('admissions_bed_allocation', {
  bed_allocation_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  appointment_id: {
    type: DataTypes.INTEGER,
  },
  patient_id: {
    type: DataTypes.INTEGER,
  },
  ward_id: {
    type: DataTypes.INTEGER,
  },
  bed_id: {
    type: DataTypes.INTEGER,
  },
  admission_date: {
    type: DataTypes.STRING,
  },
  discharge_date: {
    type: DataTypes.STRING,
  },
  ward_charges: {
    type: DataTypes.INTEGER,
  },

});

// sequelize.sync().then(() => {
//   console.log('Book table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });

module.exports = Admissions_bed_allocation;

// has no classification and status
