/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const InsuranceType = sequelize.define('insurance_types', {
  insurance_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  insurance_type_description: {
    type: DataTypes.STRING,
  },
});

module.exports = InsuranceType;
