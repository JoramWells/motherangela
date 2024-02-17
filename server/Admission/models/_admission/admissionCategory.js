/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const AdmissionCategory = sequelize.define('admission_categories', {
  admission_category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  admission_category_description: {
    type: DataTypes.STRING,
  },
});

module.exports = AdmissionCategory;
