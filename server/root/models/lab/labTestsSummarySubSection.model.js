/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Lab_tests_summary_sub_section = sequelize.define('Lab_tests_summary_sub_sections', {
  lab_tests_summary_sub_section_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  lab_tests_summary_section_id: {
    type: DataTypes.INTEGER,
  },
  lab_tests_summary_sub_section_description: {
    type: DataTypes.STRING,
  },
  procedure_id: {
    type: DataTypes.INTEGER,
  },
  procedure_item_id: {
    type: DataTypes.INTEGER,
  },

});

module.exports = Lab_tests_summary_sub_section;
