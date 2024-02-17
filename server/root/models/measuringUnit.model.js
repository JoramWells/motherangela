const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const MeasuringUnit = sequelize.define('measuringUnit', {
  measuringUnitName: {
    type: DataTypes.STRING,
  },
});

module.exports = MeasuringUnit;
