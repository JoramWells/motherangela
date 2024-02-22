/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const ConsultationTypesSubGroups = sequelize.define('consultation_types_sub_groups', {
  consultation_type_sub_group_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
  },
  consultation_type_sub_group_description: {
    type: DataTypes.STRING,
  },
  consultation_type_group_id: {
    type: DataTypes.INTEGER,
  },
  display: {
    type: DataTypes.STRING,
  },
});
module.exports = ConsultationTypesSubGroups;

// has no classification and status
