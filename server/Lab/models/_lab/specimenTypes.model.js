/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const SpecimenTypes = sequelize.define('specimen_types', {
  specimen_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  specimen_type_description: {
    type: DataTypes.STRING,
  },

});

module.exports = SpecimenTypes;
