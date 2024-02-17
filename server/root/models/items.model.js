const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const Item = sequelize.define('item', {
  itemCode: {
    type: DataTypes.STRING,
  },
  itemDescription: {
    type: DataTypes.STRING,
  },
  itemCategory: {
    type: DataTypes.STRING,
  },
  brand: {
    type: DataTypes.STRING,
  },
  uom: {
    type: DataTypes.STRING,
  },
  buyingPrice: {
    type: DataTypes.STRING,
  },
  sellingPrice: {
    type: DataTypes.STRING,
  },
  expenseAccount: {
    type: DataTypes.STRING,
  },
  incomeAccount: {
    type: DataTypes.STRING,
  },
});

// create the pricelists model
// sequelize.sync().then(()=>{
//     console.log('Book table created')
// }).catch(error=>{
//     console.error('Unable to create table :', error)
// })

module.exports = Item;
