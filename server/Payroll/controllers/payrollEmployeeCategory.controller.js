/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const Payroll_employee_category = require('../../models/payroll/payrollEmployeeCategory.model');

const addPayrollEmployeeCategory = async (req, res, next) => {
  try {
    const results = Payroll_employee_category.create(req.body);
    res.status(201).json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllPayrollEmployeeCategories = async (req, res, next) => {
  try {
    const results = await Payroll_employee_category.findAll({ });
    res.json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getPayrollEmployeeCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Payroll_employee_category.findOne({
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

const editPayrollEmployeeCategory = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const results = await Payroll_employee_category.findOne({
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

const deletePayrollEmployeeCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Payroll_employee_category.destroy({
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
  addPayrollEmployeeCategory,
  getAllPayrollEmployeeCategories,
  getPayrollEmployeeCategory,
  editPayrollEmployeeCategory,
  deletePayrollEmployeeCategory,
};
