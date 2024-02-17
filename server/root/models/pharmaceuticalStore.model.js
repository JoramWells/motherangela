const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const PharmaceuticalStores = sequelize.define('pharmaceuticalstores', {
  drugname: {
    type: DataTypes.STRING,
  },
  buyingprice: {
    type: DataTypes.STRING,
  },
  isbuyingpricetax: {
    type: DataTypes.STRING,
  },
  initialstock: {
    type: DataTypes.STRING,
  },
  remainingquantity: {
    type: DataTypes.STRING,
  },
  serialno: {
    type: DataTypes.STRING,
  },
  expirydate: {
    type: DataTypes.STRING,
  },
});

// create the pricelists model
// sequelize.sync().then(()=>{
//     console.log('Book table created')
// }).catch(error=>{
//     console.error('Unable to create table :', error)
// })

module.exports = PharmaceuticalStores;
