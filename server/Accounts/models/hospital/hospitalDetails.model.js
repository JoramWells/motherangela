/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../db/connect');

const Hospital_detail = sequelize.define('hospital_details', {
  hospital_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  hospital_name: {
    type: DataTypes.STRING,
  },
  hospital_address: {
    type: DataTypes.STRING,
  },
  hospital_location: {
    type: DataTypes.STRING,
  },
  hospital_type_id: {
    type: DataTypes.STRING,
  },
  hospital_employer_number: {
    type: DataTypes.STRING,
  },
  expire_passwords_at_start_of_every_month: {
    type: DataTypes.STRING,
  },
  personal_accounts_usage: {
    type: DataTypes.STRING,
  },
  receipt_printer_type: {
    type: DataTypes.INTEGER,
  },
  users_mnemonic_lab: {
    type: DataTypes.STRING,
  },
  night_shift_start: {
    type: DataTypes.STRING,
  },
  night_shift_end: {
    type: DataTypes.STRING,
  },
  show_diagnosis_setting: {
    type: DataTypes.STRING,
  },
  drugs_selling_price_derivation_setting: {
    type: DataTypes.INTEGER,
  },
  multiplication_factor_corporate: {
    type: DataTypes.INTEGER,
  },
  difference_invoice_for_each_service_type: {
    type: DataTypes.STRING,
  },
  pre_printed_logo_height: {
    type: DataTypes.INTEGER,
  },
  smart_service_provider_number: {
    type: DataTypes.STRING,
  },
  smart_service_ip_address: {
    type: DataTypes.STRING,
  },
  smart_service_port_number: {
    type: DataTypes.STRING,
  },
  smart_service_db_name: {
    type: DataTypes.STRING,
  },
  smart_service_user_name: {
    type: DataTypes.STRING,
  },
  smart_service_db_password: {
    type: DataTypes.STRING,
  },
});

// sequelize.sync().then(() => {
//   console.log('Book table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });

// Sequelize migration script
// async (queryInterface, Sequelize) => {
//   await queryInterface.changeColumn('Hospital_details', 'procedure_id', {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//   });
// };

module.exports = Hospital_detail;
