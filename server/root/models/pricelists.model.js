const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const PriceLists = sequelize.define('pricelists', {
  service_category: {
    type: DataTypes.STRING,
  },
  service_name: {
    type: DataTypes.STRING,
  },
  service_cost_cash: {
    type: DataTypes.STRING,
  },
  service_cost_insurance: {
    type: DataTypes.STRING,
  },
  service_cost_foreigner: {
    type: DataTypes.STRING,
  },
});

// create the pricelists model
// sequelize.sync().then(()=>{
//     console.log('Book table created')
// }).catch(error=>{
//     console.error('Unable to create table :', error)
// })

module.exports = PriceLists;
