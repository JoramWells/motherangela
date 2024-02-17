const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const Physiotherapies = sequelize.define('Physiotherapies', {
  itemName: {
    type: DataTypes.STRING,
  },
  unitMeasurement: {
    type: DataTypes.STRING,
  },
  unitPrice: {
    type: DataTypes.STRING,
  },
  quantity: {
    type: DataTypes.STRING,
  },
  physicalCount: {
    type: DataTypes.STRING,
  },
  variance: {
    type: DataTypes.STRING,
  },
}, { timestamps: true });

// create the pricelists model
// sequelize.sync().then(()=>{
//     console.log('Book table created')
// }).catch(error=>{
//     console.error('Unable to create table :', error)
// })

module.exports = Physiotherapies;
