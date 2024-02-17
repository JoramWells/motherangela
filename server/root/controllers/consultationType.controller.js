/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */

const Consultation_type = require('../models/consultationType.model');

const addConsultationType = async (req, res, next) => {
  try {
    const results = Consultation_type.create(req.body);
    res.status(201).json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllConsultationTypes = async (req, res, next) => {
  try {
    const results = await Consultation_type.findAll({});
    res.json(results);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getConsultationType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Consultation_type.findOne({
      where: {
        admission_id: id,
      },
    });
    res.json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editConsultationTYpe = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const results = await Consultation_type.findOne({
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

const deleteConsultationType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Consultation_type.destroy({
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
  addConsultationType,
  getAllConsultationTypes,
  getConsultationType,
  editConsultationTYpe,
  deleteConsultationType,
};
