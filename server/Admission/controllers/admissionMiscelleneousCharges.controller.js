/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const Admissions_miscellaneous_charges = require('../models/_admission/admissionMiscellaneousCharge.model');

const addAdmissionMiscellaneousCharges = async (req, res, next) => {
  sequelize.sync().then(() => {
    Admissions_miscellaneous_charges.create(req.body)
      .then((response) => {
        res.json(response.data);
        next();
      })
      .catch((error) => console.error(error));
  });
};

// get all priceListItems
const getAllAdmissionMiscellaneousCharges = async (req, res, next) => {
  try {
    await sequelize.sync().then(() => {
      Admissions_miscellaneous_charges.findAll({ limit: 100 })
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

const getAdmissionMiscellaneousChargesDetail = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Admissions_miscellaneous_charges.findOne({
      where: {
        id,
      },
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));
  });
};

const editAdmissionMiscellaneousCharges = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    Admissions_miscellaneous_charges.findOne({
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

const deleteAdmissionMiscellaneousCharges = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Admissions_miscellaneous_charges.destroy({
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
  addAdmissionMiscellaneousCharges,
  getAllAdmissionMiscellaneousCharges,
  getAdmissionMiscellaneousChargesDetail,
  editAdmissionMiscellaneousCharges,
  deleteAdmissionMiscellaneousCharges,
};
