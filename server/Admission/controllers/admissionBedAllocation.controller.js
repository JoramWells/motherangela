/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const Admissions_bed_allocation =
require('../models/_admission/admissionBedAllocation.model');

const addAdmissionBedAllocation = async (req, res, next) => {
  try {
    const results = await Admissions_bed_allocation.create(req.body);
    res.json(results);
    next();
    console.log('Allocating bed...');
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// get all priceListItems
const getAllAdmissionBedAllocation = async (req, res, next) => {
  try {
    await sequelize.sync().then(() => {
      Admissions_bed_allocation.findAll({ limit: 100 })
          .then((response) => {
          // console.log(response);
            res.status(200).json(response);
            // res.sendStatus(200)
            next();
          })
          .catch((error) => {
            next(error);
          });
    });
  } catch (error) {
    next(error);
  }
};

const getAdmissionBedAllocation = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Admissions_bed_allocation.findOne({
      where: {
        id,
      },
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));
  });
};

const editAdmissionBedAllocation = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    Admissions_bed_allocation.findOne({
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

const deleteAdmissionBedAllocation = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Admissions_bed_allocation.destroy({
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
  addAdmissionBedAllocation,
  getAllAdmissionBedAllocation,
  getAdmissionBedAllocation,
  editAdmissionBedAllocation,
  deleteAdmissionBedAllocation,
};
