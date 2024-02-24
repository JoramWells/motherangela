/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const Payroll_earning = require('../models/_payroll/payrollEarnings.model');
const Payroll_taxable_state = require('../models/_payroll/payrollTaxableStatus.model');

// Admissions.belongsTo(Patient_details, { foreignKey: 'patient_id', as: 'patient_details' });
// Admissions.hasMany(Patient_details, { as: 'patients', foreignKey: 'patient_id' });

const addPayrollEarnings = async (req, res, next) => {
  try {
    const results = Payroll_earning.create(req.body);
    res.status(201).json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllPayrollEarnings = async (req, res, next) => {
  try {
    const results = await Payroll_earning.findAll({
      include: [
        {
          model: Payroll_taxable_state,
          attributes: ['taxable_state_description'],
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

const getPayrollEarning = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Payroll_earning.findOne({
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

const editPayrollEarning = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const results = await Payroll_earning.findOne({
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

const deletePayrollEarnings = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Payroll_earning.destroy({
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
  addPayrollEarnings,
  getAllPayrollEarnings,
  getPayrollEarning,
  editPayrollEarning,
  deletePayrollEarnings,
};
