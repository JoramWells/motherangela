/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
// const { Kafka } = require('kafkajs');
import {Request, Response, NextFunction, RequestHandler, RequestParamHandler} from 'express'

const redis = require('redis');
const moment = require('moment');
const sequelize = require('../db/connect');
// const Insurance_detail = require('../../root/models/insurance/insurance.model');
const InsuranceDetail = require('../models/insurance/insuranceDetail.model');
const Users = require('../models/user/user.model');
const VitalSigns = require('../models/vitals/vitalSigns.model');
const ConsultationTypesSubGroups = require('../models/consultation/consultationTypeSubGroups.model');
const Appointments = require('../models/_appointment/appointments.model');
const Patient_details = require('../models/patient/patients.models');
const Eligibility = require('../models/eligibility/eligibility.model');
const Insurance_service_cost_mapping = require('../models/insurance/insuranceServiceCostMapping.model');

// const client = redis.createClient({ host: 'huruma_redis_1', port: 6380 })
// .on('error', (err) => console.log('Redis err', err.message)).connect();

// (async () => { await client.connect(); })();
// const Patient = require('../../Patients/models/patient2.models');

// const kafka = new Kafka({
//   clientId: 'appointment',
//   brokers: ['kafka:9092', 'kafka:9092'],
// });

// const consumer = kafka.consumer({ groupId: 'appointment-create-group' });

interface Appointment {
  appointment_id: number,
  patient_id: number
}

const addAppointments = async (req: Request, res: Response, next:NextFunction) => {
  // await consumer.connect();
  // await consumer.subscribe({ topic: 'register-patient' });

  // await consumer.run({
  //   eachMessage: async ({ topic, partition, message }) => {
  //     console.log({
  //       partition,
  //     });
  //   },
  // });

  // check whether insurance has been selected
try {
  let newAppointment: Appointment = {
    patient_id:0,
    appointment_id:0
  };
  const { insuranceAccount } = req.body;
  const reference_account_id = insuranceAccount?.value;

  if (insuranceAccount) {
    const results = await Insurance_service_cost_mapping.findOne({
      where: {
        insurance_id: reference_account_id,
      },
    });
    // check the price of the insurance
    if (results?.cost) {
      const { cost } = results;

      // create a new Appointment
      newAppointment = await Appointments.create({
        patient_id: req.body,
        account_type_id: req.body.account_type_id,
        appointment_date: moment().format('YYYY-MM-DD'),
        appointment_time: moment().format('hh:mm:ss'),
        charges: cost,
        reference_account_id,
      });
    } else {
      newAppointment = await Appointments.afterCreate({
        patient_id: req.body.patient_id,
        account_type_id: req.body.account_type_id,
        appointment_date: moment().format('YYYY-MM-DD'),
        appointment_time: moment().format('hh:mm:ss'),
        charges: 350,
        reference_account_id,
      });
    }

    // send to client
    res.status(200).json({
      patient_id: newAppointment.patient_id,
      appointment_id: newAppointment.appointment_id,
    });
    next();
  }
} catch (error) {
  console.log(error);
  next(error);
}
};

// const addAppointments = async (req, res, next) => {
//   const {
//     patientId, temperature, pulse_rate, respiratoryRate,
//     systolic, diastolic, weight, height, bmi, sp02,
//   } = req.body;

//   try {
//     const isAppointed = await Appointments.findOne({
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
//     const newAppointment = await Appointments.create(req.body);
//     res.json(newAppointment);

//     next();
//   } catch (error) {
//     res.sendStatus(500);
//   }
// };

// get all priceListItems
const getAllAppointments = async (req:Request, res:Response, next:NextFunction) => {
  try {
    // await client.connect().then(() => console.log('connected'));
    const appointmentResults = await Appointments.findAll({
      limit: 100,
      order: [['appointment_date', 'DESC']],
      include: [
        {
          model: Patient_details,
          attributes: ['first_name', 'middle_name', 'last_name', 'patient_gender'],
        },
        // {
        //   model: InsuranceDetail,
        //   attributes: ['insurance_name'],
        // },
        // {
        //   model: Users,
        //   attributes: ['full_name'],
        // },
        // {
        //   model:VitalSigns,
        //   attributes:['temperature']
        // },
        {
          model: Eligibility,
          attributes: ['id'],
        },
      ],
    });

    res.status(200).json(appointmentResults);
    // await client.set('appointments', appointmentResults);
    // console.log(appointmentResults);

    console.log('fetching data..');
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// get all priceListItems
const getAllAppointmentsById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const appointmentResults = await Appointments.findAll({
      where: {
        patient_id: id,
      },
      include: [
        {
          model: Patient_details,
          attributes: ['first_name', 'middle_name'],
        },
        {
          model: InsuranceDetail,
          attributes: ['insurance_name'],
        },
        {
          model: Eligibility,
          attributes: ['id'],
        },
      ],
    });

    res.status(200).json(appointmentResults);
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// const getAppointmentDetail = async (req, res, next) => {
//   const { id } = req.params;
//   await sequelize.sync().then(() => {
//     Appointments.findOne({
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

const getAppointmentDetail = async (req:Request, res:Response, next:NextFunction) => {
  const { id } = req.params;
  try {
    const result = await Appointments.findOne({
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
    console.log(error);
    res.sendStatus(500).json({ message: 'Internal Server Error' });
    next(error);
  }
};

const editAppointmentDetail = async (req: Request, res:Response, next:NextFunction) => {
  const { id, serviceName, serviceCategory } = req.body;
  try {
        const results = await Appointments.findOne({
          where: {
            id,
          },
        });
        results.service_name = serviceName;
        results.service_category = serviceCategory;
        results.save();
        next()
  } catch (error) {
    next(error)
  }
};

const deleteAppointment = async (req:Request, res:Response, next:NextFunction) => {
  const { id } = req.params;
  try {
      const results = await Appointments.destroy({
        where: {
          id,
        },
      });
      res.status(200).json(results);
      next();
  } catch (error) {
    next(error);
    console.log(error)
  }
};

module.exports = {
  addAppointments,
  getAllAppointments,
  getAppointmentDetail,
  editAppointmentDetail,
  deleteAppointment,
  getAllAppointmentsById,
};
