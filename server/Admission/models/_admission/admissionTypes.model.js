/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Admission_types = sequelize.define('admission_types', {
  admission_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  admission_type_description: {
    type: DataTypes.STRING,
  },
});

// sequelize.sync().then(() => {
//   console.log('Book table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });

module.exports = Admission_types;
