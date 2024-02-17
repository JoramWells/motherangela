/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Lab_tests_specimen_referral_type = sequelize.define('Lab_tests_specimen_referral_types', {
  specimen_referral_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  specimen_referral_type_description: {
    type: DataTypes.STRING,
  },

});

module.exports = Lab_tests_specimen_referral_type;
