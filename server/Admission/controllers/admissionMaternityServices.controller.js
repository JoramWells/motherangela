/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const Admissions_maternity_services = require('../models/_admission/admissionMaternityServices.model');
// const Patient_details = require('../../models/patient/patients.models');

const addAdmissionMaternityServices = async (req, res, next) => {
  sequelize.sync().then(() => {
    Admissions_maternity_services.create(req.body)
      .then((response) => {
        res.json(response.data);
        next();
      })
      .catch((error) => console.error(error));
  });
};

// get all priceListItems
const getAllAdmissionMaternityServices = async (req, res, next) => {
  try {
    await sequelize.sync().then(() => {
      Admissions_maternity_services.findAll({
        limit: 100,
        // include: [
        //   {
        //     model: Patient_details,
        //     attributes: ['first_name'],
        //   },
        // ],
      })
        .then((response) => {
          // console.log(response);
          res.status(200).json(response);
          // res.sendStatus(200)
          next();
        })
        .catch((error) => {
          next(error);
          console.log(error);
        });
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAdmissionMaternityServicesDetail = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Admissions_maternity_services.findOne({
      where: {
        id,
      },
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));
  });
};

const editAdmissionMaternityServices = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    Admissions_maternity_services.findOne({
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

const deleteAdmissionMaternityServices = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Admissions_maternity_services.destroy({
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
  addAdmissionMaternityServices,
  getAllAdmissionMaternityServices,
  getAdmissionMaternityServicesDetail,
  editAdmissionMaternityServices,
  deleteAdmissionMaternityServices,
};
