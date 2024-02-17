/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
const Company_detail = require('../models/companyDetails.models');

// Company_detail.belongsTo(Patient_details, { foreignKey: 'patient_id', as: 'patient_details' });
// Company_detail.hasMany(Patient_details, { as: 'patients', foreignKey: 'patient_id' });

const addCompany = async (req, res, next) => {
  try {
    const results = Company_detail.create(req.body);
    res.status(201).json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllCompanies = async (req, res, next) => {
  try {
    const results = await Company_detail.findAll({});
    res.json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getCompanyDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Company_detail.findOne({
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

const editCompany = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const results = await Company_detail.findOne({
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

const deleteCompany = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Company_detail.destroy({
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
  addCompany,
  getAllCompanies,
  getCompanyDetail,
  editCompany,
  deleteCompany,
};
