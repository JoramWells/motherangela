/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

import { NextFunction, Request, Response } from "express";

// const { Kafka } = require('kafkajs');
const Appointments = require('../models/_appointment/appointments.model');
const Patient_details = require('../models/patient/patients.models');
const VitalSigns = require('../models/vitals/vitalSigns.model');

const addVitals = async (req:Request, res:Response, next:NextFunction) => {
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
const getAllVitals = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const appointmentResults = await VitalSigns.findAll({
      limit: 100,
      include: [
        {
          model: Appointments,
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
const getAllVitalsById = async (req:Request, res:Response, next:NextFunction) => {
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

const getVitalDetail = async (req:Request, res:Response, next:NextFunction) => {
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

const editVitals = async (req:Request, res:Response, next:NextFunction) => {
  const { id, serviceName, serviceCategory } = req.body;
  try {
      const results = await VitalSigns.findOne({
        where: {
          id,
        },
      });
      results.service_name = serviceName;
      results.service_category = serviceCategory;
      results.save();
      next();
  } catch (error) {
    console.log(error)
    next(error)
    
  }

};

const deleteVitals = async (req:Request, res:Response, next:NextFunction) => {
  const { id } = req.params;
  try {
      const results = await VitalSigns.destroy({
        where: {
          id,
        },
      });
      res.status(200).json(results);
      next();
  } catch (error) {
    next(error)
  }


};

module.exports = {
  addVitals,
  getAllVitals,
  getVitalDetail,
  editVitals,
  deleteVitals,
  getAllVitalsById,
};
