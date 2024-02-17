/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const Consultation_types_group = sequelize.define('consultation_types_groups', {
  consultation_type_group_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  consultation_type_group_description: {
    type: DataTypes.STRING,
  },
});
module.exports = Consultation_types_group;

// has no classification and status
