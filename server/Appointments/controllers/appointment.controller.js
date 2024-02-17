/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
// const { Kafka } = require('kafkajs');
const sequelize = require('../db/connect');
const Appointments2 = require('../models/_appointment/appointments2.models');
// const Insurance_detail = require('../../root/models/insurance/insurance.model');
const Patient = require('../models/patient/patients.model');
const InsuranceDetail = require('../models/insurance/insuranceDetail.model');
const Users = require('../models/user/user.model');
// const Patient = require('../../Patients/models/patient2.models');

// const kafka = new Kafka({
//   clientId: 'appointment',
//   brokers: ['kafka:9092', 'kafka:9092'],
// });

// const consumer = kafka.consumer({ groupId: 'appointment-create-group' });

const addAppointments = async (req, res, next) => {
  // await consumer.connect();
  // await consumer.subscribe({ topic: 'register-patient' });

  // await consumer.run({
  //   eachMessage: async ({ topic, partition, message }) => {
  //     console.log({
  //       partition,
  //     });
  //   },
  // });
};

// const addAppointments = async (req, res, next) => {
//   const {
//     patientId, temperature, pulse_rate, respiratoryRate,
//     systolic, diastolic, weight, height, bmi, sp02,
//   } = req.body;

//   try {
//     const isAppointed = await Appointments2.findOne({
//       where: {
//         patient_id: patientId,
//       },
//     });

//     if (isAppointed) {
//       isAppointed.patient_id = patientId;
//       isAppointed.temperature = temperature;
//       isAppointed.pulse_rate = pulse_rate;
//       isAppointed.respiratory_rate = respiratoryRate;
//       isAppointed.systolic = systolic;
//       isAppointed.diastolic = diastolic;
//       isAppointed.weight = weight;
//       isAppointed.height = height;
//       isAppointed.body_mass_index = bmi;
//       isAppointed.sp02 = sp02;
//       next();
//       return isAppointed.save();
//     }
//     const newAppointment = await Appointments2.create(req.body);
//     res.json(newAppointment);

//     next();
//   } catch (error) {
//     res.sendStatus(500);
//   }
// };

// get all priceListItems
const getAllAppointments = async (req, res, next) => {
  try {
    const appointmentResults = await Appointments2.findAll({
      limit: 100,
      include: [
        {
          model: Patient,
          attributes: ['first_name', 'middle_name', 'last_name', 'patient_gender'],
        },
        {
          model: InsuranceDetail,
          attributes: ['insurance_name'],
        },
        {
          model: Users,
          attributes: ['full_name'],
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
const getAllAppointmentsById = async (req, res, next) => {
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
        {
          model: InsuranceDetail,
          attributes: ['insurance_name'],
        },
      ],
    });

    res.status(200).json(appointmentResults);
  } catch (error) {
    next(error);
  }
};

// const getAppointmentDetail = async (req, res, next) => {
//   const { id } = req.params;
//   await sequelize.sync().then(() => {
//     Appointments2.findOne({
//       where: {
//         appointment_id: id,
//       },
//       include: [
//         {
//           model: Account_type,
//           attributes: ['account_type_description'],
//         },
//       ],
//     }).then((response) => {
//       res.json(response);
//     }).catch((error) => console.error(error));
//   });
// };

const getAppointmentDetail = async (req, res, next) => {
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

const editAppointmentDetail = async (req, res, next) => {
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

// add vitals

const add = async (req, res, next) => {
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
const deleteAppointment = async (req, res, next) => {
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
  addAppointments,
  getAllAppointments,
  getAppointmentDetail,
  editAppointmentDetail,
  deleteAppointment,
  getAllAppointmentsById,
};
