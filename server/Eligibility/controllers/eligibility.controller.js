/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
// const { Kafka } = require('kafkajs');
const sequelize = require('../db/connect');
const Eligibility = require('../models/_eligibility/eligibility.model');
const Appointments2 = require('../models/appointment/appointments2.models');
// const Insurance_detail = require('../../root/models/insurance/insurance.model');
const Patient = require('../models/patient/patient2.models');

// const kafka = new Kafka({
//   clientId: 'appointment',
//   brokers: ['kafka:9092', 'kafka:9092'],
// });

// const consumer = kafka.consumer({ groupId: 'appointment-create-group' });

const addEligibility = async (req, res, next) => {
  try {
    const newVitals = await Eligibility.create(req.body);
    res.json(newVitals);
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// get all priceListItems
const getAllEligibility = async (req, res, next) => {
  try {
    const appointmentResults = await Eligibility.findAll({
      limit: 100,
      include: [
        {
          model: Appointments2,
          attributes: ['patient_id'],
          include: [
            {
              model: Patient,
              attributes: ['first_name', 'middle_name'],
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
const getAllEligibilityById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const appointmentResults = await Appointments2.findAll({
      where: {
        patient_id: id,
      },
      limit: 100,
      include: [
        {
          model: Patient,
          attributes: ['first_name', 'middle_name'],
        },
      ],
    });

    res.status(200).json(appointmentResults);
  } catch (error) {
    next(error);
  }
};

const getEligibilityDetail = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Appointments2.findOne({
      where: {
        appointment_id: id,
      },
      include: [
        {
          model: Patient,
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

const editEligibilityDetail = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    Appointments2.findOne({
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

const deleteEligibility = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Appointments2.destroy({
      where: {
        id,
      },
    }).then((response) => {
      res.status(200);
    });
  }).catch((err) => console.log(err));
};

module.exports = {
  addEligibility,
  getAllEligibility,
  getEligibilityDetail,
  editEligibilityDetail,
  deleteEligibility,
  getAllEligibilityById,
};
