/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const Medication = require('../models/medication/medication.model');
const Medicine_purchase = require('../models/medication/medicinePurchases.model');

const addMedicationPurchases = async (req, res, next) => {
  try {
    const result = await Medicine_purchase.create(req.body);
    res.status(201).json(result);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllMedicationPurchases = async (req, res, next) => {
  try {
    const results = await Medicine_purchase.findAll({
      include: [
        {
          model: Medication,
          attributes: ['medication_name'],
        },
      ],
    });
    res.json(results);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getMedicationPurchaseDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Medicine_purchase.findOne({
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

const editMedicationPurchase = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const user = await Medicine_purchase.findOne({
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

const deleteMedicationPurchase = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Medicine_purchase.destroy({
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
  addMedicationPurchases,
  getAllMedicationPurchases,
  getMedicationPurchaseDetail,
  editMedicationPurchase,
  deleteMedicationPurchase,
};
