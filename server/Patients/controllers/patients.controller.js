/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const moment = require('moment/moment');
// const { Kafka } = require('kafkajs');
const sequelize = require('../db/connect');
const Patient = require('../models/patient2.models');

// const kafka = new Kafka({
//   clientId: 'patient',
//   brokers: ['kafka-1:29092', 'kafka-2:39092'],
// });

// const producer = kafka.producer();

// const Patient_details = require('../models/patients.models');
// const Appointments2 = require('../../Appointments/models/appointments2.models');
const InsuranceServiceCostMapping = require('../models/insurance/insuranceServiceCostMapping.model');
const Appointments2 = require('../models/appointment/appointments.model');
const Patient_details = require('../models/patients.models');

// using *Patients model
const addPatients = async (req, res, next) => {
  try {
    // await producer.connect();
    const { insuranceAccount } = req.body;

    // the reference account_id is the id of the insurance-service-cost-mapping
    const reference_account_id = insuranceAccount?.value;

    console.log(req.body);
    // await producer.send({
    //   topic: 'register-patient',
    //   messages: [
    //     {
    //       value: 'hello',
    //     },
    //   ],
    // });

    // await producer.disconnect();

    // create a new user profile
    const newProfile = await Patient_details.create(req.body);
    let newAppointment = {};

    // // Check if user has a corporate. results = null, charges = 0
    if (insuranceAccount) {
      const results = await InsuranceServiceCostMapping.findOne({
        where: {
          insurance_id: reference_account_id,
        },
      });

      if (results?.cost) {
        const { cost } = results;

        newAppointment = await Appointments2.create({
          patient_id: newProfile?.patient_id,
          account_type_id: req.body.account_type_id,
          appointment_date: moment().format('YYYY-MM-DD'),
          appointment_time: moment().format('hh:mm:ss'),
          charges: cost,
          reference_account_id,
        });
      }
    } else {
      // // Create ew Appointment. Initial amount 350 for new patient
      newAppointment = await Appointments2.create({
        patient_id: newProfile?.patient_id,
        account_type_id: req.body.account_type_id,
        appointment_date: moment().format('YYYY-MM-DD'),
        appointment_time: moment().format('hh:mm:ss'),
        charges: 350,
        reference_account_id,
      });
    }

    res.status(201).json({
      patient_id: newProfile.patient_id,
      appointment_id: newAppointment.appointment_id,
    });
    res.status(200);
    next();
  } catch (error) {
    console.log(error);
    // res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

// get all priceListItems
const getAllPatients = async (req, res, next) => {
  try {
    const patients = await Patient.findAll({ limit: 100 });
    res.json(patients);
    next();
  } catch (error) {
    console.log(error)
    res.sendStatus(500).json({ error: 'Internal Server error' });
    next(error);
  }
};

const getPatientDetail = async (req, res, next) => {
  const { id } = req.params;
  try {
    const patient = await Patient.findOne({
      where: {
        patient_id: id,
      },
    });
    res.json(patient);
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: 'Internal Server Error' });
  }
};

// edit patient
const editPatient = async (req, res, next) => {
  const { id } = req.params;
  const {
    first_name, middle_name, last_name, id_number, cell_phone,
  } = req.body;
  try {
    const editPAtient = await Patient.findOne({
      where: {
        patient_id: id,
      },
    });

    editPAtient.first_name = first_name;
    editPAtient.middle_name = middle_name;
    editPAtient.last_name = last_name;
    editPAtient.id_number = id_number;
    editPAtient.cell_phone = cell_phone;
    next();

    return editPAtient.save();
  } catch (error) {
    res.sendStatus(500).json({ message: 'Internal Server' });
  }
};

const deletePatient = async (req, res, next) => {
  const { id } = req.params;
  try {
    const results = await Patient.destroy({
      where: {
        patient_id: id,
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
  addPatients, getAllPatients, getPatientDetail, editPatient, deletePatient,
};
