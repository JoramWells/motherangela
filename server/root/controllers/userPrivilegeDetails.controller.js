/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */

const Privilege_detail = require('../models/userPrivilegesDetails.model');

const addUserPrivilegeDetail = async (req, res, next) => {
  try {
    const results = await Privilege_detail.create(req.body);
    res.status(201).json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllUserPrivilegeDetails = async (req, res, next) => {
  try {
    const results = await Privilege_detail.findAll({});
    res.json(results);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getUserPrivilegeDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Privilege_detail.findOne({
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

const editUserPrivilegeDetail = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const results = await Privilege_detail.findOne({
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

const deleteUserPrivilegeDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Privilege_detail.destroy({
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
  addUserPrivilegeDetail,
  getAllUserPrivilegeDetails,
  getUserPrivilegeDetail,
  editUserPrivilegeDetail,
  deleteUserPrivilegeDetail,
};
