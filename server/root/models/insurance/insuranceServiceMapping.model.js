/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const Insurance_detail = require('./insurance.model');
// const Service_type = require('../servics/serviceTypes.model');

const Insurance_service_cost_mapping = sequelize.define('insurance_service_cost_mappings', {
  service_cost_mapping_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  insurance_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'insurance_details',
      key: 'insurance_id',
    },
    onDelete: 'CASCADE',
  },
  service_type_id: {
    type: DataTypes.INTEGER,
  },
  service_id: {
    type: DataTypes.INTEGER,
  },
  cost: {
    type: DataTypes.INTEGER,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
  copay_amount: {
    type: DataTypes.INTEGER,
  },
  percentage_discount: {
    type: DataTypes.INTEGER,
  },
  withholding_tax_percentage: {
    type: DataTypes.INTEGER,
  },
});

// create the pricelists model
// sequelize.sync().then(() => {
//   console.log('Book table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });

Insurance_service_cost_mapping.belongsTo(Insurance_detail, { foreignKey: 'insurance_id' });
Insurance_detail.hasMany(Insurance_service_cost_mapping, { foreignKey: 'insurance_id' });
// Insurance_service_cost_mapping.belongsTo(Service_type, { foreignKey: 'service_type_id' });

module.exports = Insurance_service_cost_mapping;
