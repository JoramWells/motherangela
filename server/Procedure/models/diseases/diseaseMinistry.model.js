/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const DiseasesMinistry = sequelize.define('diseases_ministry', {
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

module.exports = DiseasesMinistry;

// has no classification and status
