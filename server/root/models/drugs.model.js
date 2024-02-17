const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const Drugs = sequelize.define('drugs', {
  drugName: {
    type: DataTypes.STRING,
  },
});

module.exports = Drugs;
