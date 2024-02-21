/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const Medication_group = sequelize.define('medication_groups', {
  medication_group_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  medication_group_description: {
    type: DataTypes.STRING,
  },
});

// create the pricelists model
// sequelize.sync().then(()=>{
//     console.log('Book table created')
// }).catch(error=>{
//     console.error('Unable to create table :', error)
// })

module.exports = Medication_group;
