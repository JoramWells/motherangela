/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const MeasuringUnit = require('../models/measuringUnit.model');
const PriceListsItems = require('../models/priceListItems.model');

const addMeasuringUnit = async (req, res, next) => {
  const { measuringUnitName } = req.body;
  sequelize.sync().then(() => {
    MeasuringUnit.create({
      measuringUnitName,
    })
      .then((response) => {
        res.json(response.data);
        next();
      })
      .catch((error) => console.error(error));
  });
};

// get all priceListItems
const getAllMeasuringUnits = async (req, res, next) => {
  try {
    await sequelize.sync().then(() => {
      MeasuringUnit.findAll({ limit: 100 })
        .then((response) => {
          // console.log(response);
          res.status(200).json(response);
          // res.sendStatus(200)
          next();
        })
        .catch((error) => next(error));
    });
  } catch (error) {
    next(error);
  }
};

const getMeasuringUnitDetail = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    MeasuringUnit.findOne({
      where: {
        id,
      },
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));
  });
};

const editMeasuringUnit = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    MeasuringUnit.findOne({
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

module.exports = {
  addMeasuringUnit, getAllMeasuringUnits, getMeasuringUnitDetail, editMeasuringUnit,
};
