/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const Procedure_detail = require('../models/procedure/procedureDetails.model');
const Users = require('../models/user/user.model');
const InternalLabRequests = require('../models/_lab/internalLabRequests2.model');
const Patient = require('../models/patient/patients.models');
const Appointments2 = require('../models/appointment/appointments2.models');
const InsuranceDetail = require('../models/insurance/insuranceDetail.model');

const addInternalLabRequest = async (req, res, next) => {
  try {
    const newAppointment = await InternalLabRequests.create(req.body);
    res.json(newAppointment);

    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: 'Internal server error!!' });
  }
};

// get all priceListItems
const getAllInternalLabRequests = async (req, res, next) => {
  try {
    const results = await InternalLabRequests.findAll({
      limit: 100,
      include: [
        {
          model: Appointments2,
          attributes: ['appointment_date'],
          include: [{
            model: InsuranceDetail,
            attributes: ['insurance_name'],
          }],
        },
        {
          model: Patient,
          attributes: ['first_name', 'middle_name', 'dob', 'patient_gender'],
        },
        {
          model: Procedure_detail,
          attributes: ['procedure_name', 'procedure_cost'],
        },
      ],
    });
    res.json(results);
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: 'Internal server error!!' });
    next(error);
  }
};

const getInternalLabRequest = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await InternalLabRequests.findAll({
      where: {
        lab_request_id: id,
      },
      include: [
        {
          model: Appointments2,
          attributes: ['appointment_date', 'charges', 'appointment_time'],
        },
        {
          model: Patient,
          attributes: ['first_name', 'middle_name', 'dob', 'patient_gender'],
        },
        {
          model: Procedure_detail,
          attributes: ['procedure_name', 'procedure_cost'],
        },
        {
          model: Users,
          attributes: ['full_name', 'status'],
        },
      ],
    });
    res.json(result);
    next();
  } catch (error) {
    console.log(error);
    res.send('Internal Server Error');
    next(error);
  }
};

const editInternalLabRequest = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    InternalLabRequests.findOne({
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
    InternalLabRequests.findOne({
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
const deleteInternalLabRequest = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    InternalLabRequests.destroy({
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
  addInternalLabRequest,
  getAllInternalLabRequests,
  getInternalLabRequest,
  editInternalLabRequest,
  deleteInternalLabRequest,
};
