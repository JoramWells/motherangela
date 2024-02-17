/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const Results_status = sequelize.define('results_status', {
  results_status_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  results_status_description: {
    type: DataTypes.STRING,
  },
});
module.exports = Results_status;

// has no classification and status
