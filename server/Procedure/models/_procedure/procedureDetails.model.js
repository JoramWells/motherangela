/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../db/connect');
const ProcedureCategory = require('./procedureCategory.model');

const Procedure_detail = sequelize.define('procedure_details', {
  procedure_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  procedure_name: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  procedure_cost: {
    type: DataTypes.STRING,
  },
  procedure_category_id: {
    type: DataTypes.INTEGER,
  },
  hospital_id: {
    type: DataTypes.INTEGER,
    // references: {
    //   model: 'hospital_details',
    //   key: 'hospital_id',
    // },
  },
  procedure_cost_corporate: {
    type: DataTypes.STRING,
  },
  normal_values: {
    type: DataTypes.STRING,
  },
  procedure_cost_foreigner: {
    type: DataTypes.STRING,
  },
  order_code: {
    type: DataTypes.STRING,
  },
  print_number: {
    type: DataTypes.STRING,
  },
  lancet_mnemonic: {
    type: DataTypes.STRING,
  },
  test_type: {
    type: DataTypes.STRING,
  },
  loinc: {
    type: DataTypes.STRING,
  },
  procedure_cost_night: {
    type: DataTypes.STRING,
  },
  withholding_tax_percentage: {
    type: DataTypes.STRING,
  },
  discount_applicability: {
    type: DataTypes.STRING,
  },
  results_posting_lock_setting: {
    type: DataTypes.STRING,
  },
  procedure_cost_insurance: {
    type: DataTypes.STRING,
  },
  show_procedure_items_table_headers: {
    type: DataTypes.STRING,
  },
  procedure_group_id: {
    type: DataTypes.STRING,
  },
  suspended: {
    type: DataTypes.STRING,
  },
});

Procedure_detail.belongsTo(ProcedureCategory, { foreignKey: 'procedure_category_id' });

// sequelize.sync().then(() => {
//   console.log('Book table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });

// // Sequelize migration script
// async (queryInterface, Sequelize) => {
//   await queryInterface.changeColumn('procedure_details', 'procedure_id', {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//   });
// };

module.exports = Procedure_detail;
