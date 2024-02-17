/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const Insurance_detail = require('../../models/insurance/insurance.model');
const Insurance_medication_mapping = require('../../models/insurance/insuranceMedicationMapping.model');
const Medication = require('../../models/medication/medication.model');

const addInsuranceMedicationMapping = async (req, res, next) => {
  try {
    const result = await Insurance_medication_mapping.create(req.body);
    res.status(201).json(result);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllInsuranceMedicationMapping = async (req, res, next) => {
  try {
    const results = await Insurance_medication_mapping.findAll({
      include: [
        {
          model: Medication,
          attributes: ['medication_name'],
        },
        {
          model: Insurance_detail,
          attributes: ['insurance_name'],
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

const getInsuranceMedicationMappingDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Insurance_medication_mapping.findOne({
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

const editMedicationInsuranceMedicationMapping = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const user = await Insurance_medication_mapping.findOne({
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

const deleteInsuranceMedicationMapping = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Insurance_medication_mapping.destroy({
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
  addInsuranceMedicationMapping,
  getAllInsuranceMedicationMapping,
  getInsuranceMedicationMappingDetail,
  editMedicationInsuranceMedicationMapping,
  deleteInsuranceMedicationMapping,
};
