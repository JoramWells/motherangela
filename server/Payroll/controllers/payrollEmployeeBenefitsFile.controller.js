/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const Payroll_employee_benefits_file = require('../models/_payroll/payrollEmployeeBenefitsFile.model');
const Payroll_employee_loan_record = require('../models/_payroll/payrollEmployeeLoanRecord.model.js');

// Admissions.belongsTo(Patient_details, { foreignKey: 'patient_id', as: 'patient_details' });
// Admissions.hasMany(Patient_details, { as: 'patients', foreignKey: 'patient_id' });

const addPayrollEmployeeBenefits = async (req, res, next) => {
  try {
    const results = Payroll_employee_benefits_file.create(req.body);
    res.status(201).json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllPayrollEmployeeBenefits = async (req, res, next) => {
  try {
    const results = await Payroll_employee_benefits_file.findAll({
      include: [
        {
          model: Payroll_employee_loan_record,
          attributes: ['full_name'],
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

const getPayrollEmployeeEmployeeBenefit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Payroll_employee_benefits_file.findOne({
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

const editPayrollEmployeeEmployeeBenefit = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const results = await Payroll_employee_benefits_file.findOne({
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

const deletePayrollEmployeeEmployeeBenefit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Payroll_employee_benefits_file.destroy({
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
  addPayrollEmployeeBenefits,
  getAllPayrollEmployeeBenefits,
  getPayrollEmployeeEmployeeBenefit,
  editPayrollEmployeeEmployeeBenefit,
  deletePayrollEmployeeEmployeeBenefit,
};
