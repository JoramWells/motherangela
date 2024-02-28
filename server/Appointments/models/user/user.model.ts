/* eslint-disable camelcase */
import { DataTypes } from 'sequelize';
const sequelize = require('../../db/connect');
const User_types = require('./userType.models');

const Users = sequelize.define('users', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_no: {
    type: DataTypes.STRING,
  },
  user_type_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user_types',
      key: 'user_type_id',
    },
    onDelete: 'CASCADE',
    // type: DataTypes.INTEGER,

  },
  full_name: {
    type: DataTypes.STRING,
  },
  user_name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
  hospital_id: {
    type: DataTypes.STRING,
  },
  navigation_style: {
    type: DataTypes.STRING,
  },
  consultation_income_percentage: {
    type: DataTypes.STRING,
  },
  procedure_income_percentage: {
    type: DataTypes.STRING,
  },
});

// create the pricelists model

Users.belongsTo(User_types, { foreignKey: 'user_type_id' });
User_types.hasMany(Users, { foreignKey: 'user_type_id' });
User_types.hasMany(Users, { foreignKey: 'user_type_id' });

// sequelize.sync().then(() => {
//   console.log('Book table created');
// }).catch((error) => {
//   console.error('Unable to create table :', error);
// });

module.exports = Users;
