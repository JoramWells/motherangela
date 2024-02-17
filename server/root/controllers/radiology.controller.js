/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const Item = require('../models/items.model');
const Radiology = require('../models/radiology.models');

const addRadiologyRequest = async (req, res, next) => {
  sequelize.sync().then(() => {
    Radiology.create(req.body)
      .then((response) => {
        res.json(response.data);
        next();
      })
      .catch((error) => console.error(error));
  });
};

// get all priceListItems
const getAllRadiologyRequests = async (req, res, next) => {
  try {
    await sequelize.sync().then(() => {
      Radiology.findAll({ limit: 100 })
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

const getRadiologyRequestDetail = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Radiology.findOne({
      where: {
        id,
      },
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));
  });
};

const editRadiologyRequestDetail = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    Item.findOne({
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
  addRadiologyRequest,
  getAllRadiologyRequests,
  getRadiologyRequestDetail,
  editRadiologyRequestDetail,
};
