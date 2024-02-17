/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Inpatient_case_types = sequelize
  .define('inpatient_case_type', {
    inpatient_case_type_id:
     {
       type: DataTypes.INTEGER,
       primaryKey: true,
     },
    inpatient_case_type_description:
     { type: DataTypes.INTEGER },

    // end

  });

module.exports = Inpatient_case_types;
