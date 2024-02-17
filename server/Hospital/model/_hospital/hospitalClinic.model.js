/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const HospitalClinics = sequelize.define('hospital_clinics', {
    clinic_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    clinic_name: {
        type: DataTypes.STRING,
    },
    invoice_prefix: {
        type: DataTypes.STRING,
    },

});


module.exports = HospitalClinics;

// has no classification and status
