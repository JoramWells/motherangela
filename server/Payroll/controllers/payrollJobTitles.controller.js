/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const Payroll_job_title = require('../models/_payroll/payrollJobTitles.model');

// Admissions.belongsTo(Patient_details, { foreignKey: 'patient_id', as: 'patient_details' });
// Admissions.hasMany(Patient_details, { as: 'patients', foreignKey: 'patient_id' });

const addPayrollJobTitle = async (req, res, next) => {
  try {
    const results = Payroll_job_title.create(req.body);
    res.status(201).json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllPayrollJobTitles = async (req, res, next) => {
  try {
    const results = await Payroll_job_title.findAll({});
    res.json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getPayrollJobTitle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Payroll_job_title.findOne({
      where: {
        credit_payment_id: id,
      },
    });
    res.json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editPayrollJobTitle = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const results = await Payroll_job_title.findOne({
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

const deletePayrollJobTitle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Payroll_job_title.destroy({
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
  addPayrollJobTitle,
  getAllPayrollJobTitles,
  getPayrollJobTitle,
  editPayrollJobTitle,
  deletePayrollJobTitle,
};
