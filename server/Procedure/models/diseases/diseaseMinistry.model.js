/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Diseases_ministry = sequelize.define('diseases_ministry', {
  ministry_disease_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  ministry_disease_name: {
    type: DataTypes.STRING,
  },
  over_five_years_index: {
    type: DataTypes.INTEGER,
  },
  under_five_years_index: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Diseases_ministry;

// has no classification and status
