/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const Hospital_store = sequelize.define('hospital_stores', {
  hospital_store_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  hospital_store_description: {
    type: DataTypes.STRING,
  },
  hospital_store_type_id: {
    type: DataTypes.INTEGER,
  },
  clinic_id: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Hospital_store;

// has no classification and status
