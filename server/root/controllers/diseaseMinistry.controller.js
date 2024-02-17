/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const Diseases_ministry = require('../models/diseaseMinistry.model');

// diseases.belongsTo(Patient_details, { foreignKey: 'patient_id', as: 'patient_details' });
// diseases.hasMany(Patient_details, { as: 'patients', foreignKey: 'patient_id' });

const addDiseaseMinistry = async (req, res, next) => {
  try {
    const disease = await Diseases_ministry.create(req.body);
    res.status(201).json(disease);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllDiseasesMinistry = async (req, res, next) => {
  try {
    const diseases = await Diseases_ministry.findAll();
    res.json(diseases);
    next();
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getDiseaseMinistryDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const disease = await Diseases_ministry.findOne({ });
    res.json(disease);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editDiseaseMinistry = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const user = await Diseases_ministry.findOne({
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

const deleteDiseaseMinistry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Diseases_ministry.destroy({
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
  addDiseaseMinistry,
  getAllDiseasesMinistry,
  getDiseaseMinistryDetail,
  editDiseaseMinistry,
  deleteDiseaseMinistry,
};
