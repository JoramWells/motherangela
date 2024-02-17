/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const Sequelize = require('sequelize');
const Personal_account_charge = require('../../models/charges/personalAccountCharges2.model');
const Patient = require('../../models/charges/patient2.models');
// const Patient = require('../../models/charges/patient2.models');

// const Personal_account_charge = require('../models/personalAccountCharges.model');

const addPersonalAccountCharge = async (req, res, next) => {
  try {
    const results = await Personal_account_charge.create(req.body);
    // const results = await Personal_account_charge.findAll({
    //   where: {
    //     patient_id: userID,
    //   },
    // });
    res.status(201).json(results);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// const addPersonalAccountCharge = async (req, res, next) => {
//   console.log(req.body);
//   try {
//     const { id } = req.params;
//     const { services } = req.body;
//     const parsedServices = JSON.parse(services);
//     const userID = parsedServices[0].patient_id;
//     const results = await Personal_account_charge.bulkCreate(parsedServices);
//     // const results = await Personal_account_charge.findAll({
//     //   where: {
//     //     patient_id: userID,
//     //   },
//     // });3
//     res.status(201).json(results);
//     next();
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

const getAllPersonalAccountCharges = async (req, res, next) => {
  try {
    const results = await Personal_account_charge.findAll({
      attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('personal_account_charge.patient_id')), 'patient_id'],
        [Sequelize.fn('COUNT', Sequelize.col('personal_account_charge.patient_id')), 'patient_count'],
        'date_of_charge',
      ],
      group: [
        'personal_account_charge.patient_id',
        'date_of_charge',
        'patient.patient_id',
      ],
      include: [
        {
          model: Patient,
          attributes: ['first_name', 'middle_name'],
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

const getPersonalAccountCharge = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Personal_account_charge.findOne({
      where: {
        personal_account_charge_id: id,
      },
    });
    res.json(result);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getUserPersonalAccountCharge = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Personal_account_charge.findAll({
      where: {
        patient_id: id,
      },
    });
    res.json(result);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editPersonalAccountCharge = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const result = await Personal_account_charge.findOne({
      where: {
        id,
      },
    });
    result.firstName = firstName;
    return result.save();
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deletePersonalAccountCharge = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Personal_account_charge.destroy({
      where: {
        personal_account_charge_id: id,
      },
    });
    next();
    if (results) {
      return res.status(200).json({ message: 'User deleted successfully' });
    }
    return res.status(404).json({ message: 'User not found.' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  addPersonalAccountCharge,
  getAllPersonalAccountCharges,
  getPersonalAccountCharge,
  editPersonalAccountCharge,
  deletePersonalAccountCharge,
  getUserPersonalAccountCharge,
};
