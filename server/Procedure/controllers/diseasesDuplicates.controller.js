/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const DiseasesDuplicates = require('../models/diseases/diseasesDuplicates');

const addDiseasesDuplicates = async (req, res, next) => {
  try {
    const diseasesDuplicates = DiseasesDuplicates.create(req.body);
    res.status(201).json(diseasesDuplicates);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllDiseasesDuplicates = async (req, res, next) => {
  try {
    const results = await DiseasesDuplicates.findAll();
    res.json(results);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getDiseasesDuplicatesDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id !== 'null') {
      const diseasesDuplicates = await DiseasesDuplicates.findOne({
        where: {
          disease_duplicate_id: id,
        },
      });
      res.json(diseasesDuplicates);
      next();
    } else {
      res.json();
      next();
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editDiseasesDuplicates = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const user = await DiseasesDuplicates.findOne({
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

const deleteDiseasesDuplicates = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await DiseasesDuplicates.destroy({
      where: {
        diseasesDuplicates_id: id,
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
  addDiseasesDuplicates,
  getAllDiseasesDuplicates,
  getDiseasesDuplicatesDetail,
  editDiseasesDuplicates,
  deleteDiseasesDuplicates,
};
