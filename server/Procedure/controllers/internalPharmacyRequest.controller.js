/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const Sequelize = require('sequelize');
const sequelize = require('../db/connect');
const Medication = require('../models/medication/medication.model');
const Internal_pharmacy_request2 = require('../models/pharmacy/internalPharmarcyRequest.model');
const Patient = require('../models/patient/patient.model');
const Patient_details = require('../models/patient/patients.models');

const addInternalPharmacyRequest = async (req, res, next) => {
  try {
    const newAppointment = await Internal_pharmacy_request2.create(req.body);
    res.json(newAppointment);

    next();
  } catch (error) {
    res.sendStatus(500).json({ message: 'Internal server error!!' });
  }
};

// get all priceListItems
const getAllInternalPharmacyRequests = async (req, res, next) => {
  try {
    const results = await Internal_pharmacy_request2.findAll({
      limit: 100,
      attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('internal_pharmacy_request2s.appointment_id')), 'appointment_id']],
      group: ['internal_pharmacy_request2s.appointment_id', 'patient.patient_id'],
      include: [
        {
          model: Patient_details,
          attributes: ['first_name', 'middle_name', 'last_name', 'dob', 'patient_id'],
        },
      ],
    });
    next();
    res.json(results);
  } catch (error) {
    console.log(error);
    next(error);
    res.sendStatus(500).json({ message: 'Internal server error!!' });
  }
};

const getInternalPharmacyRequest = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Internal_pharmacy_request2.findAll({
      where: {
        patient_id: id,
      },
      include: [
        {
          model: Patient_details,
          attributes: ['first_name', 'middle_name', 'dob', 'patient_gender', 'patient_id'],
        },
        {
          model: Medication,
          attributes: ['medication_name'],
        },
      ],
    });
    res.json(result);
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: 'Internal Server Error' });
  }
};

const editInternalPharmacyRequest = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    Internal_pharmacy_request2.findOne({
      where: {
        id,
      },
    })
      .then((response) => {
        response.service_name = serviceName;
        response.service_category = serviceCategory;
        return response.save();
      })
      .catch((error) => console.error(error));
  });
};

// add vitals

const deleteInternalPharmacyRequest = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Internal_pharmacy_request2.destroy({
      where: {
        id,
      },
    }).then((response) => {
      console.log(response);
      res.status(200);
    });
  }).catch((err) => console.log(err));
};

module.exports = {
  addInternalPharmacyRequest,
  getAllInternalPharmacyRequests,
  getInternalPharmacyRequest,
  editInternalPharmacyRequest,
  deleteInternalPharmacyRequest,
};
