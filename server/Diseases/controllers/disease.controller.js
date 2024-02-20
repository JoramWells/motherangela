/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const Disease = require('../models/diseases/disease.model');

// diseases.belongsTo(Patient_details, { foreignKey: 'patient_id', as: 'patient_details' });
// diseases.hasMany(Patient_details, { as: 'patients', foreignKey: 'patient_id' });

const addDisease = async (req, res, next) => {
  try {
    const disease = Disease.create(req.body);
    res.status(201).json(disease);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllDiseases = async (req, res, next) => {
  try {
    const diseases = await Disease.findAll();
    res.json(diseases);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getDiseaseDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const disease = await Disease.findOne({ });
    res.json(disease);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editDisease = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const user = await Disease.findOne({
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

const deleteDisease = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Disease.destroy({
      where: {
        disease_id: id,
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
  addDisease,
  getAllDiseases,
  getDiseaseDetail,
  editDisease,
  deleteDisease,
};
