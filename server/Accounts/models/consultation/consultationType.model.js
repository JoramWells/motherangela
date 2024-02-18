/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../../root/db/connect');

const ConsultationType = sequelize.define('consultation_types', {
  consultation_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  consultation_type_description: {
    type: DataTypes.STRING,
  },
  non_corporate_cost: {
    type: DataTypes.INTEGER,
  },
  corporate_cost: {
    type: DataTypes.INTEGER,
  },
});
module.exports = ConsultationType;

// has no classification and status
