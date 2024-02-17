const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Procedures = sequelize.define('procedures', {
  procedureName: {
    type: DataTypes.STRING,
  },
  procedureGroup: {
    type: DataTypes.STRING,
  },
});

module.exports = Procedures;
