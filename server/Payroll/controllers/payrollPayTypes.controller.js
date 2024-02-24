/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const Payroll_pay_type = require('../../models/payroll/payrollPayTypes.model');

const addPayrollPayTypes = async (req, res, next) => {
  try {
    const results = Payroll_pay_type.create(req.body);
    res.status(201).json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllPayrollPayType = async (req, res, next) => {
  try {
    const results = await Payroll_pay_type.findAll({ });
    res.json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getPayrollPayType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Payroll_pay_type.findOne({
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

const editPayrollPayType = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const results = await Payroll_pay_type.findOne({
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

const deletePayrollPayType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Payroll_pay_type.destroy({
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
  addPayrollPayTypes,
  getAllPayrollPayType,
  getPayrollPayType,
  editPayrollPayType,
  deletePayrollPayType,
};
