/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const { DataTypes } = require('sequelize');
const sequelize = require('../../db/connect');
const Users = require('../user/user.model');

const AccountingAssetDepreciationUserCreations = sequelize.define('accounting_asset_depreciation_user_creations', {
  asset_depreciation_user_creation_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
  },
  date_of_journal: {
    type: DataTypes.DATE,
  },
  creation_date: {
    type: DataTypes.DATE,
  },
  creation_time: {
    type: DataTypes.STRING,
  },
});


AccountingAssetDepreciationUserCreations.belongsTo(Users,{foreignKey:'user_id'})

module.exports = AccountingAssetDepreciationUserCreations;

// has no classification and status
