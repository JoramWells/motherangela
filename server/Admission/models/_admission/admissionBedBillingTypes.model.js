/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const AdmissionBedBillingTypes = sequelize.define('admission_bed_billing_types', {
  bed_billing_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  bed_billing_type_description: {
    type: DataTypes.STRING,
  },
});

module.exports = AdmissionBedBillingTypes;
