/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const Privilege_detail = sequelize.define('privilege_details', {
  privilege_id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  privilege_name: {
    type: DataTypes.STRING,
  },
});

module.exports = Privilege_detail;
