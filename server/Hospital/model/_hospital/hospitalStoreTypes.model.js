/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');

const HospitalStoreTypes = sequelize.define('hospital_store_types', {
    hospital_store_type_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    hospital_store_type_description: {
        type: DataTypes.STRING,
    },

});


module.exports = HospitalStoreTypes;

// has no classification and status
