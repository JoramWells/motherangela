const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const Radiology = sequelize.define('radiology', {
  serviceCategory: {
    type: DataTypes.STRING,
  },
  serviceName: {
    type: DataTypes.STRING,
  },
  serviceCostCash: {
    type: DataTypes.STRING,
  },
  serviceCostCorporate: {
    type: DataTypes.STRING,
  },
  serviceCostInsurance: {
    type: DataTypes.STRING,
  },
  serviceCostForeigner: {
    type: DataTypes.STRING,
  },
});

// create the pricelists model
// sequelize.sync().then(()=>{
//     console.log('Book table created')
// }).catch(error=>{
//     console.error('Unable to create table :', error)
// })

module.exports = Radiology;
