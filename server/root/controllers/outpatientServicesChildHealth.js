/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const Out_patient_services_child_health_information = require('../models/outPatientServicesChildHealthInformation.model');

const addOutPatientServicesCH = async (req, res, next) => {
  sequelize.sync().then(() => {
    Out_patient_services_child_health_information.create(req.body)
      .then((response) => {
        res.json(response.data);
        next();
      })
      .catch((error) => console.error(error));
  });
};

// get all priceListItems
const getAllOutPatientServicesCH = async (req, res, next) => {
  try {
    await sequelize.sync().then(() => {
      Out_patient_services_child_health_information.findAll({ limit: 100 })
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

const getOutPatientServicesCHDetail = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Out_patient_services_child_health_information.findOne({
      where: {
        appointment_id: id,
      },
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));
  });
};

const editOutPatientServicesCH = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    Out_patient_services_child_health_information.findOne({
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

const deleteOutPatientServicesCH = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Out_patient_services_child_health_information.destroy({
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
  addOutPatientServicesCH,
  getAllOutPatientServicesCH,
  getOutPatientServicesCHDetail,
  editOutPatientServicesCH,
  deleteOutPatientServicesCH,
};
