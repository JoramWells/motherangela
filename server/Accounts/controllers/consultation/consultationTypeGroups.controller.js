/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */

const ConsultationTypesGroup = require("../../models/consultation/consultationTypeGroups.model");


const addConsultationTypeGroup = async (req, res, next) => {
  try {
    const results = ConsultationTypesGroup.create(req.body);
    res.status(201).json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllConsultationTypeGroups = async (req, res, next) => {
  try {
    const results = await ConsultationTypesGroup.findAll({});
    res.json(results);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getConsultationTypeGroup = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await ConsultationTypesGroup.findOne({
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

const editConsultationTypeGroup = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const results = await ConsultationTypesGroup.findOne({
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

const deleteConsultationTypeGroup = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await ConsultationTypesGroup.destroy({
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
  addConsultationTypeGroup,
  getAllConsultationTypeGroups,
  getConsultationTypeGroup,
  editConsultationTypeGroup,
  deleteConsultationTypeGroup,
};
