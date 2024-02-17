/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const Service_type = require('../models/serviceTypes.model');

const addServiceType = async (req, res, next) => {
  try {
    const result = await Service_type.create(req.body);
    res.status(201).json(result);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllServiceType = async (req, res, next) => {
  try {
    const results = await Service_type.findAll({});
    res.json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getServiceType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Service_type.findOne({
      where: {
        result_id: id,
      },
    });
    res.json(result);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editServiceType = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const user = await Service_type.findOne({
      where: {
        id,
      },
    });
    user.firstName = firstName;
    return user.save();
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteServiceType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Service_type.destroy({
      where: {
        result_id: id,
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
  addServiceType,
  getAllServiceType,
  getServiceType,
  editServiceType,
  deleteServiceType,
};
