/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const Medication_category = require('../../models/medication/medicationCategory.models');
const Medication_packaging_type = require('../../models/medication/medicationPackaging.model');

const addMedicationCategory = async (req, res, next) => {
  try {
    const result = Medication_category.create(req.body);
    res.status(201).json(result);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllMedicationCategories = async (req, res, next) => {
  try {
    const results = await Medication_category.findAll({});
    res.json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getMedicationCategoryDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Medication_category.findOne({
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

const editMedicationCategory = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const results = await Medication_category.findOne({
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

const deleteMedicationCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Medication_category.destroy({
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
  addMedicationCategory,
  getAllMedicationCategories,
  getMedicationCategoryDetail,
  editMedicationCategory,
  deleteMedicationCategory,
};
