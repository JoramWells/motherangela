/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const a_lab = sequelize.define('a_lab', {
  a_lab_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  a_lab_description: {
    type: DataTypes.STRING,
  },

});

module.exports = a_lab;
