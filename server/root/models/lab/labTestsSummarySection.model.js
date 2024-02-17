/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Lab_tests_summary_section = sequelize.define('Lab_tests_summary_sections', {
  lab_tests_summary_section_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  lab_tests_summary_section_description: {
    type: DataTypes.STRING,
  },

});

module.exports = Lab_tests_summary_section;
