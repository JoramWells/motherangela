/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const SupplierClassification = require('../models/supplierClassification.model');

const addSupplierClassification = async (req, res, next) => {
  sequelize.sync().then(() => {
    SupplierClassification.create(req.body)
      .then((response) => {
        res.json(response.data);
        next();
      })
      .catch((error) => console.error(error));
  });
};

// get all priceListItems
const getAllSupplierClassification = async (req, res, next) => {
  try {
    await sequelize.sync().then(() => {
      SupplierClassification.findAll({ limit: 100 })
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

const getSupplierClassificationDetail = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    SupplierClassification.findOne({
      where: {
        id,
      },
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));
  });
};

const editSupplierClassification = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    SupplierClassification.findOne({
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
  addSupplierClassification,
  getAllSupplierClassification,
  getSupplierClassificationDetail,
  editSupplierClassification,
};
