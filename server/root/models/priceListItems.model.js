const { DataTypes } = require('sequelize');
const sequelize = require('../db/connect');

const PriceListsItems = sequelize.define('pricelistitems', {
  item_code: {
    type: DataTypes.STRING,
  },
  item_description: {
    type: DataTypes.STRING,
  },
  item_category: {
    type: DataTypes.STRING,
  },
  uom: {
    type: DataTypes.STRING,
  },
  buying_price: {
    type: DataTypes.STRING,
  },
  selling_price: {
    type: DataTypes.STRING,
  },
  expense_account: {
    type: DataTypes.STRING,
  },
  income_account: {
    type: DataTypes.STRING,
  },
});

// create the pricelists model
// sequelize.sync().then(()=>{
//     console.log('Book table created')
// }).catch(error=>{
//     console.error('Unable to create table :', error)
// })

module.exports = PriceListsItems;
