/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const { Sequelize } = require('sequelize');
const sequelize = require('../db/connect');
const Inpatient_case_types = require(
    '../models/inpatient/inpatientCaseTypes.model',
);
const Admissions2 = require('../models/_admission/admission2.model');
const WardBed = require('../models/ward/wardBed.model');
const Patient = require('../models/patient/patients.model');
const Admission_category = require('../models/_admission/admissionCategory');
const Wards = require('../models/ward/ward.model');


const addAdmission = async (req, res, next) => {
  try {
    const admission = await Admissions2.create(req.body);
    res.json(admission);
    next();
    console.log('saving admission..');
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getAllAdmission = async (req, res, next) => {
  try {
    const admissions = await Admissions2.findAll({
      order: [['admission_date', 'DESC']],
      limit: 100,
      include: [
        {
          model: Patient,
          attributes: ['first_name', 'middle_name'],
        },
        {
          model: WardBed,
          attributes: ['bed_number'],
        },
        {
          model: Wards,
          attributes: ['ward_description'],
        },
      ],
    });
    res.json(admissions);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getAdmissionDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const admission = await Admissions2.findOne({
      limit: 100,
      where: {
        admission_id: id,
      },
      include: [
        // {
        //   model: Patient,
        //   attributes: ['first_name', 'middle_name'],

        // },
        {
          model: Admission_category,
          attributes: ['admission_category_description'],
        },
        {
          model: Inpatient_case_types,
          attributes: ['inpatient_case_type_description'],
        },
      ],
    });
    res.json(admission);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const editAdmissionDetail = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const user = await Admissions2.findOne({
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

const deleteAdmission = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Admissions2.destroy({
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
  addAdmission,
  getAllAdmission,
  getAdmissionDetail,
  editAdmissionDetail,
  deleteAdmission,
};
