/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const HospitalClinics = require('./hospitalClinic.model');
const HospitalStoreTypes = require('./hospitalStoreTypes.model');

const HospitalStores = sequelize.define('hospital_stores', {
    hospital_store_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    hospital_store_description: {
        type: DataTypes.STRING,
    },
    clinic_id: {
        type: DataTypes.INTEGER,
    },
    hospital_store_type_id: {
        type: DataTypes.INTEGER,
    },
});

HospitalStores.belongsTo(HospitalClinics, { foreignKey: 'clinic_id' })
HospitalStores.belongsTo(HospitalStoreTypes, { foreignKey:'hospital_store_type_id'})


module.exports = HospitalStores;

// has no classification and status
