/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Admission_patient_miscellaneous_charges = sequelize
  .define('admission_patient_miscellaneous_charges', {
    admission_patient_miscellaneous_charge_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
   },
      admission_miscellaneous_charge_id:
       { type: DataTypes.INTEGER },
      appointment_id:
        { type: DataTypes.INTEGER },
      admission_id:
        { type: DataTypes.INTEGER },
      patient_id:
        { type: DataTypes.INTEGER },
      charge_type:
        { type: DataTypes.STRING },
      unit_cost:
        { types: DataTypes.INTEGER },
      quantity:
        { types: DataTypes.INTEGER },
      admission_category_id:
        { type: DataTypes.INTEGER },

  });

module.exports = Admission_patient_miscellaneous_charges;
