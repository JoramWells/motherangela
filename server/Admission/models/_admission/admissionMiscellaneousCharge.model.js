/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Admissions_miscellaneous_charges = sequelize.define('admissions_miscellaneous_charges', {
  admission_miscellaneous_charge_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  admission_miscellaneous_charge_description: {
    type: DataTypes.STRING,
  },
  cost_cash: {
    type: DataTypes.INTEGER,
  },
  cost_corporate: {
    type: DataTypes.INTEGER,
  },
  charge_type: {
    type: DataTypes.STRING,
  },
  admission_category_id: {
    type: DataTypes.INTEGER,
  },

  // rows remaining

});
module.exports = Admissions_miscellaneous_charges;

// has no classification and status
