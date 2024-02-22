/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
// const { Kafka } = require('kafkajs');
const sequelize = require('../db/connect');
const Appointments2 = require('../models/_appointment/appointments2.models');
const Patient_details = require('../models/patient/patients.models');
const VitalSigns = require('../models/vitals/vitalSigns.model');

const addVitals = async (req, res, next) => {
  try {
    const newVitals = await VitalSigns.create(req.body);
    res.json(newVitals);
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// get all priceListItems
const getAllVitals = async (req, res, next) => {
  try {
    const appointmentResults = await VitalSigns.findAll({
      limit: 100,
      include: [
        {
          model: Appointments2,
          attributes: ['patient_id'],
          include: [
            {
              model: Patient_details,
              attributes: ['first_name'],
            },
          ],
        },
      ],
    });

    res.status(200).json(appointmentResults);
    // console.log(appointmentResults);

    console.log('fetching data..');
    next();
  } catch (error) {
    next(error);
  }
};

// get all priceListItems
const getAllVitalsById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const appointmentResults = await VitalSigns.findAll({
      where: {
        patient_id: id,
      },
      limit: 100,
      include: [
        {
          model: Patient_details,
          attributes: ['first_name', 'middle_name'],
        },
      ],
    });

    res.status(200).json(appointmentResults);
  } catch (error) {
    next(error);
  }
};

const getVitalDetail = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await VitalSigns.findOne({
      where: {
        appointment_id: id,
      },
      include: [
        {
          model: Patient_details,
          attributes: ['first_name', 'middle_name', 'dob', 'patient_gender'],

        },
      ],
    });
    res.json(result);
    next();
  } catch (error) {
    res.sendStatus(500).json({ message: 'Internal Server Error' });
    next(error);
  }
};

const editVitals = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    VitalSigns.findOne({
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

const add = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    VitalSigns.findOne({
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
const deleteVitals = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    VitalSigns.destroy({
      where: {
        id,
      },
    }).then((response) => {
      res.status(200);
    });
  }).catch((err) => console.log(err));
};

module.exports = {
  addVitals,
  getAllVitals,
  getVitalDetail,
  editVitals,
  deleteVitals,
  getAllVitalsById,
};
