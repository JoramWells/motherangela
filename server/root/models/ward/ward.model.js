const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Wards = sequelize.define('wards', {
  ward_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    // defaultValue: UUIDV4,
    autoIncrement: true,
  },
  ward_type_id: {
    type: DataTypes.INTEGER,
  },
  ward_description: {
    type: DataTypes.STRING,
  },
  // admission_charge_non_corporate: {
  //   type: DataTypes.STRING,
  // },
  admission_charge_corporate: {
    type: DataTypes.STRING,
  },
  // daily_rate_non_corporate: {
  //   type: DataTypes.STRING,
  // },
  // nursing_daily_charge_non_corporate: {
  //   type: DataTypes.STRING,
  // },
  // nursing_daily_charge_corporate: {
  //   type: DataTypes.STRING,
  // },
}, { timestamps: false });

// create the pricelists model
// sequelize.sync().then(() => {
//   console.log('Ward table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });

module.exports = Wards;
