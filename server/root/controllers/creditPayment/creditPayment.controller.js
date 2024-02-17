/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

// const Appointments = require('../../models/appointment/appointments.models');
const Credit_payment = require('../../models/creditPayment/creditPayments.model');
const Credit_payment2 = require('../../models/creditPayment/creditPayments2.model');

// Admissions.belongsTo(Patient_details, { foreignKey: 'patient_id', as: 'patient_details' });
// Admissions.hasMany(Patient_details, { as: 'patients', foreignKey: 'patient_id' });

const addCreditPayment = async (req, res, next) => {
  try {
    const creditPayment = Credit_payment2.create(req.body);
    res.status(201).json(creditPayment);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllCreditPayment = async (req, res, next) => {
  try {
    const creditPayments = await Credit_payment.findAll({ limit: 100 });
    res.json(creditPayments);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getCreditPaymentDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const creditPayment = await Credit_payment.findOne({
      where: {
        credit_payment_id: id,
      },
      // include: [
      //   {
      //     model: Appointments,
      //     attributes: ['appointment_date'],
      //   },
      // ],
    });
    res.json(creditPayment);
    next();
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editCreditPayment = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const creditPayment = await Credit_payment.findOne({
      where: {
        id,
      },
    });
    creditPayment.firstName = firstName;
    return creditPayment.save();
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteCreditPayment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Credit_payment.destroy({
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
  addCreditPayment,
  getAllCreditPayment,
  getCreditPaymentDetail,
  editCreditPayment,
  deleteCreditPayment,
};
