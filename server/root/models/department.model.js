const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const Departments = sequelize.define('departments', {
  departmentName: {
    type: DataTypes.STRING,
  },
});

module.exports = Departments;
