/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */

const User_privilege = require('../models/userPrivileges.model');

const addUserPrivilege = async (req, res, next) => {
  try {
    const results = await User_privilege.create(req.body);
    res.status(201).json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllUserPrivileges = async (req, res, next) => {
  try {
    const results = await User_privilege.findAll({});
    res.json(results);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getUserPrivilege = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await User_privilege.findOne({
      where: {
        user_id: id,
      },
    });
    res.json(results);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const editUserPrivilege = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const results = await User_privilege.findOne({
      where: {
        id,
      },
    });
    results.firstName = firstName;
    return results.save();
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteUserPrivilege = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await User_privilege.destroy({
      where: {
        admission_id: id,
      },
    });
    if (results) {
      return res.status(200).json({ message: 'User deleted successfully' });
    }
    return res.status(404).json({ message: 'User not found.' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  addUserPrivilege,
  getAllUserPrivileges,
  getUserPrivilege,
  editUserPrivilege,
  deleteUserPrivilege,
};
