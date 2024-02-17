/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const User_types = sequelize.define('user_types', {
  user_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  user_type_desc: {
    type: DataTypes.STRING,
  },
});

module.exports = User_types;
