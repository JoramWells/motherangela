/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */

const ConsultationTypesSubGroups = require("../../models/consultation/consultationTypeSubGroups.model");

const addConsultationSubTypeGroup = async (req, res, next) => {
  try {
    const results = ConsultationTypesSubGroups.create(req.body);
    res.status(201).json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllConsultationTypeSubGroups = async (req, res, next) => {
  try {
    const results = await ConsultationTypesSubGroups.findAll({});
    res.json(results);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getConsultationTypeSubGroup = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await ConsultationTypesSubGroups.findOne({
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

const editConsultationTypeSubGroup = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const results = await ConsultationTypesSubGroups.findOne({
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

const deleteConsultationTypeSubGroup = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await ConsultationTypesSubGroups.destroy({
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
  addConsultationSubTypeGroup,
  getAllConsultationTypeSubGroups,
  getConsultationTypeSubGroup,
  editConsultationTypeSubGroup,
  deleteConsultationTypeSubGroup,
};
