/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const Procedure_detail = require('./procedureDetails.model');

const ProcedureItem = sequelize.define('procedure_items', {
  procedure_item_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  procedure_item_description: {
    type: DataTypes.STRING,
  },
  normal_values: {
    type: DataTypes.STRING,
  },
  procedure_id: {
    type: DataTypes.INTEGER,
  },
  order_position: {
    type: DataTypes.INTEGER,
  },
  normal_values_start: {
    type: DataTypes.INTEGER,
  },
  normal_values_end: {
    type: DataTypes.STRING,
  },
  show_normal_values: {
    type: DataTypes.STRING,
  },
  show_flag: {
    type: DataTypes.STRING,
  },
  show_input: {
    type: DataTypes.STRING,
  },
  show_procedure_item_checked_value: {
    type: DataTypes.STRING,
  },
  show_procedure_items_conclusion: {
    type: DataTypes.STRING,
  },
  show_negative_and_positive_options_only: {
    type: DataTypes.STRING,
  },
  show_malignant_and_non_malignant_options_only: {
    type: DataTypes.STRING,
  },
  allow_numerical_input_only: {
    type: DataTypes.STRING,
  },
  // created_at: {
  //   type: DataTypes.DATE,
  //   allowNull: false,
  //   defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  // },
  // updated_at: {
  //   type: DataTypes.DATE,
  //   allowNull: false,
  //   defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  // },
});

ProcedureItem.belongsTo(Procedure_detail, { foreignKey: 'procedure_id' });

module.exports = ProcedureItem;
