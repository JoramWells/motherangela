const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const ProcedureGroup = sequelize.define('procedureGroup', {
  procedureGroupName: {
    type: DataTypes.STRING,
  },
});

module.exports = ProcedureGroup;
