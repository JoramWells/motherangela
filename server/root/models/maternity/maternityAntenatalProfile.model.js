/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const Maternity_profile = require('./maternityProfile.model');

const Maternity_antenatal_profile = sequelize.define('maternity_antenatal_profile', {
  maternity_antenatal_profile_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  maternity_profile_id: {
    type: DataTypes.INTEGER,
  },
  hb: {
    type: DataTypes.STRING,
  },
  blood_group: {
    type: DataTypes.STRING,
  },
  rhesus: {
    type: DataTypes.STRING,
  },
  serology: {
    type: DataTypes.STRING,
  },
  tb_screening: {
    type: DataTypes.STRING,
  },
  hiv: {
    type: DataTypes.STRING,
  },
  urinalysis: {
    type: DataTypes.STRING,
  },
  hiv_testing_done: {
    type: DataTypes.STRING,
  },

});

Maternity_antenatal_profile.belongsTo(Maternity_profile, { foreignKey: 'maternity_profile_id' });

// sequelize.sync().then(() => {
//   console.log('Book table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });

module.exports = Maternity_antenatal_profile;

// has no classification and status
