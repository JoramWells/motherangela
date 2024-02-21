/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const DiseasesDuplicates = sequelize.define('diseases_duplicates', {
  disease_duplicate_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  disease_name: {
    type: DataTypes.STRING,
  },
});

// create the pricelists model
// sequelize.sync().then(()=>{
//     console.log('Book table created')
// }).catch(error=>{
//     console.error('Unable to create table :', error)
// })

module.exports = DiseasesDuplicates;
