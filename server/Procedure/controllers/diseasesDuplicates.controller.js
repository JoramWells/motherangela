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
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
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
      const results = await DiseasesDuplicates.findOne({
        where: {
          disease_duplicate_id: id,
        },
      });
      res.json(results);
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
  const { id } = req.params;
  const { disease_name } = req.body;
  try {
    const result = await DiseasesDuplicates.findOne({
      where: {
        disease_duplicate_id: id,
      },
    });
    result.disease_name = disease_name;
    result.save();
    res.json(result);
    next();
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteDiseasesDuplicates = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await DiseasesDuplicates.destroy({
      where: {
        disease_duplicate_id: id,
      },
    });
    if (results) {
      res.status(200).json(results);
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
    next(error);
  }
};

module.exports = {
  addDiseasesDuplicates,
  getAllDiseasesDuplicates,
  getDiseasesDuplicatesDetail,
  editDiseasesDuplicates,
  deleteDiseasesDuplicates,
};
