/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const Medication = require('../../models/medication/medication.model');
const Medication_category = require('../../models/medication/medicationCategory.models');
const Medication_packaging_type = require('../../models/medication/medicationPackaging.model');

const addMedication = async (req, res, next) => {
  try {
    const result = await Medication.create(req.body);
    res.status(201).json(result);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllMedication = async (req, res, next) => {
  try {
    const results = await Medication.findAll({
      include: [
        {
          model: Medication_category,
          attributes: ['category_name'],
        },
        {
          model: Medication_packaging_type,
          attributes: ['package_description'],
        },
      ],
    });
    res.json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getMedicationDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Medication.findOne({
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

const editMedicationDetail = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const user = await Medication.findOne({
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

const deleteMedication = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Medication.destroy({
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
  addMedication,
  getAllMedication,
  getMedicationDetail,
  editMedicationDetail,
  deleteMedication,
};
