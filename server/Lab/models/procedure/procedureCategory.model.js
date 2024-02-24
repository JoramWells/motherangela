/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../db/connect');
const ServiceType = require('../services/serviceType.model');

const ProcedureCategory = sequelize.define('procedure_categories', {
  category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    unique:true
  },
  category_name: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'hospital_details',
      key: 'hospital_id',
    },
  },
  service_type_id: {
    type: DataTypes.INTEGER,
  },
  credit_account_id: {
    type: DataTypes.INTEGER,
  }
});

ProcedureCategory.belongsTo(ServiceType, { foreignKey:'service_type_id'})

module.exports = ProcedureCategory;
