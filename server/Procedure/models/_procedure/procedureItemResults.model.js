/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Procedure_item_result = sequelize.define('procedure_item_results', {
  procedure_item_result_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  appointment_id: {
    type: DataTypes.INTEGER,
  },
  procedure_item_id: {
    type: DataTypes.INTEGER,
  },
  procedure_id: {
    type: DataTypes.INTEGER,
  },
  input: {
    type: DataTypes.STRING,
  },
  normal_values: {
    type: DataTypes.STRING,
  },
  flag: {
    type: DataTypes.STRING,
  },
  microscopy: {
    type: DataTypes.STRING,
  },
  lab_request_id: {
    type: DataTypes.INTEGER,
  },
  procedure_item_checked: {
    type: DataTypes.STRING,
  },
  procedure_item_conclusions_id: {
    type: DataTypes.INTEGER,
  },
  procedure_item_conclusions_description: {
    type: DataTypes.STRING,
  },
});

module.exports = Procedure_item_result;
