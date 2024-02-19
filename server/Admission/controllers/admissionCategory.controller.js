/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const Admission_category = require('../models/_admission/admissionCategory');

const addAdmissionCategory = async (req, res, next) => {
  try {
    const newAdmission = await Admission_category.create(req.body);
    res.json(newAdmission);
    next();
  } catch (error) {
    console.log(error);
    res.json({ message: 'Internal server error' });
    next(error);
  }
};

const getAllAdmissionCategory = async (req, res, next) => {
  try {
    const results = await Admission_category.findAll({});
    res.json(results);
    next();
  } catch (error) {
    console.log(error);
  }
};

const getAdmissionDetailCategory = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Admission_category.findOne({
      where: {
        admission_id: id,
      },
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));
  });
};

const editAdmissionDetailCategory = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    Admission_category.findOne({
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
    Admission_category.destroy({
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
  addAdmissionCategory,
  getAllAdmissionCategory,
  getAdmissionDetailCategory,
  editAdmissionDetailCategory,
  deleteAdmissionCategory,
};
