/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Disease = sequelize.define('diseases', {
  disease_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  disease_name: {
    type: DataTypes.STRING,
  },
  ministry_disease_id: {
    type: DataTypes.INTEGER,
  },
  disease_icd_ten_code: {
    type: DataTypes.STRING,
  },
});

// create the pricelists model
// sequelize.sync().then(()=>{
//     console.log('Book table created')
// }).catch(error=>{
//     console.error('Unable to create table :', error)
// })

module.exports = Disease;
