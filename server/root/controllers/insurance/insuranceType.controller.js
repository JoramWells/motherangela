/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const InsuranceType = require("../../models/insurance/insuranceType.model");

const addInsuranceType = async (req, res, next) => {
  try {
    const result = await InsuranceType.create(req.body);
    res.status(201).json(result);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllInsuranceType = async (req, res, next) => {
  try {
    const results = await InsuranceType.findAll({});
    res.json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getInsuranceTypeDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await InsuranceType.findOne({
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

const editMedicationInsuranceType = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const user = await InsuranceType.findOne({
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

const deleteInsuranceType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await InsuranceType.destroy({
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
  addInsuranceType,
  getAllInsuranceType,
  getInsuranceTypeDetail,
  editMedicationInsuranceType,
  deleteInsuranceType,
};
