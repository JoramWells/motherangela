/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Admission_deposits = sequelize.define('admission_deposit', {
  admission_deposits_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  admission_id: { type: DataTypes.INTEGER },
  date_of_deposits: { type: DataTypes.INTEGER },
  time_of_deposits: { type: DataTypes.STRING },
  amount: { type: DataTypes.INTEGER },
  user_id: { type: DataTypes.INTEGER },

  // rows remaining

});
module.export = Admission_deposits;
