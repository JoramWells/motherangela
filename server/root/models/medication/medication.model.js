/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const Medication_category = require('./medicationCategory.models');
const Medication_packaging_type = require('./medicationPackaging.model');

const Medication = sequelize.define('medication', {
  medication_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  medication_name: {
    type: DataTypes.STRING,
  },
  medication_category_id: {
    type: DataTypes.INTEGER,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  price_corporate: {
    type: DataTypes.INTEGER,
  },
  reorder_level: {
    type: DataTypes.INTEGER,
  },
  medication_packaging_type_id: {
    type: DataTypes.INTEGER,
  },
  price_foreigner: {
    type: DataTypes.INTEGER,
  },
  buying_price: {
    type: DataTypes.INTEGER,
  },
  sell_at_buying_price: {
    type: DataTypes.INTEGER,
  },
  visible: {
    type: DataTypes.STRING,
  },
  linked_item_id: {
    type: DataTypes.INTEGER,
  },
  appointment_type_allowed: {
    type: DataTypes.STRING,
  },
  medication_group_id: {
    type: DataTypes.INTEGER,
  },
  // unit: {
  //   type: DataTypes.STRING,
  // },
  // uses_fixed_selling_price: {
  //   type: DataTypes.STRING,
  // },
  // medication_category_name: {
  //   type: DataTypes.STRING,
  // },
  // minimum_selling_price: {
  //   type: DataTypes.INTEGER,
  // },
  // maximum_selling_price: {
  //   type: DataTypes.INTEGER,
  // },
  // suspended: {
  //   type: DataTypes.STRING,
  // },
});

// create the pricelists model
// sequelize.sync().then(()=>{
//     console.log('Book table created')
// }).catch(error=>{
//     console.error('Unable to create table :', error)
// })

Medication.belongsTo(Medication_category, {
  foreignKey: 'medication_category_id',
  targetKey: 'category_id',
});

Medication.belongsTo(Medication_packaging_type, { foreignKey: 'medication_packaging_type_id' });

module.exports = Medication;
