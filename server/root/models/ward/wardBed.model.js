/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const Wards = require('./ward.model');

const ward_bed = sequelize.define('ward_beds', {
  bed_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    // autoIncrement: true,
  },
  bed_number: {
    type: DataTypes.STRING,
  },
  ward_id: {
    type: DataTypes.INTEGER,
    // references: {
    //   model: 'wards',
    //   key: 'ward_id',
    // },
    // onDelete: 'CASCADE',
    // defaultValue: 2,

  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
  occupied: {
    type: DataTypes.STRING,
  },
});
// create the pricelists model
// sequelize.sync().then(() => {
//   console.log('Book table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });

ward_bed.belongsTo(Wards, { foreignKey: 'ward_id' });

module.exports = ward_bed;
