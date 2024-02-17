/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const Payroll_employee_deduction = require('../../models/payroll/payrollEmployeeDeductions.model');

// Admissions.belongsTo(Patient_details, { foreignKey: 'patient_id', as: 'patient_details' });
// Admissions.hasMany(Patient_details, { as: 'patients', foreignKey: 'patient_id' });

const addPayrollEmployeeDeduction = async (req, res, next) => {
  try {
    const results = Payroll_employee_deduction.create(req.body);
    res.status(201).json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllPayrollEmployeeDeductions = async (req, res, next) => {
  try {
    const results = await Payroll_employee_deduction.findAll({});
    res.json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getPayrollEmployeeDeduction = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Payroll_employee_deduction.findOne({
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

const editPayrollEmployeeDeduction = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const results = await Payroll_employee_deduction.findOne({
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

const deletePayrollEmployeeDeduction = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Payroll_employee_deduction.destroy({
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
  addPayrollEmployeeDeduction,
  getAllPayrollEmployeeDeductions,
  getPayrollEmployeeDeduction,
  editPayrollEmployeeDeduction,
  deletePayrollEmployeeDeduction,
};
