/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const ConsultationTypesGroup = sequelize.define('consultation_types_groups', {
  consultation_type_group_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  consultation_type_group_description: {
    type: DataTypes.STRING,
  },
});
module.exports = ConsultationTypesGroup;

// has no classification and status
