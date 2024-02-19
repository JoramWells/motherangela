/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const InpatientCaseType = sequelize
    .define('inpatient_case_typeS', {
      inpatient_case_type_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      inpatient_case_type_description: { type: DataTypes.STRING },

    });

module.exports = InpatientCaseType;
