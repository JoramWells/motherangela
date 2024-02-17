/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const Admission_types = require('../models/_admission/admissionTypes.model');

const addAdmissionType = async (req, res, next) => {
  sequelize.sync().then(() => {
    Admission_types.create(req.body)
      .then((response) => {
        res.json(response.data);
        next();
      })
      .catch((error) => console.error(error));
  });
};

const getAllAdmissionType = async (req, res, next) => {
  try {
    await sequelize.sync().then(() => {
      Admission_types.findAll()
        .then((response) => {
          console.log(response);
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

const getAdmissionDetailType = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Admission_types.findOne({
      where: {
        admission_type_id: id,
      },
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));
  });
};

const editAdmissionDetailCategory = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    Admission_types.findOne({
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

const deleteAdmissionCategory = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Admission_types.destroy({
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
  addAdmissionType,
  getAllAdmissionType,
  getAdmissionDetailType,
  editAdmissionDetailCategory,
  deleteAdmissionCategory,
};
