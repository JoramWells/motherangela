/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Maternity_delivery = sequelize.define('maternity_delivery', {
  maternity_delivery_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  maternity_profile_id: {
    type: DataTypes.INTEGER,
  },
  duration_of_pregnancy: {
    type: DataTypes.STRING,
  },
  mode_of_delivery: {
    type: DataTypes.STRING,
  },
  date_of_delivery: {
    type: DataTypes.STRING,
  },
  blood_loss: {
    type: DataTypes.STRING,
  },
  condition_of_mother: {
    type: DataTypes.STRING,
  },
  agpar_score_1_min: {
    type: DataTypes.INTEGER,
  },
  agpar_score_5_min: {
    type: DataTypes.STRING,
  },
  agpar_score_10_min: {
    type: DataTypes.STRING,
  },
  rescuscitation_done: {
    type: DataTypes.STRING,
  },
  oxytocin: {
    type: DataTypes.STRING,
  },
  azt_single_done: {
    type: DataTypes.STRING,
  },
  vitamin_a: {
    type: DataTypes.STRING,
  },
  nvp_single_done: {
    type: DataTypes.STRING,
  },
  vitamin_k: {
    type: DataTypes.STRING,
  },
  teo: {
    type: DataTypes.STRING,
  },
  place_of_delivery: {
    type: DataTypes.STRING,
  },
  conducted_by: {
    type: DataTypes.STRING,
  },

});

module.exports = Maternity_delivery;

// has no classification and status
