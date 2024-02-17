/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Insurance_limit_type = sequelize.define('insurance_limit_types', {
  insurance_limit_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  insurance_limit_type_description: {
    type: DataTypes.STRING,
  },
});

module.exports = Insurance_limit_type;
