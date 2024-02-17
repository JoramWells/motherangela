/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const PharmaceuticalStores = require('../models/pharmaceuticalStore.model');

const addPharmaceuticalItem = async (req, res, next) => {
  const {
    service_category,
    service_name,
    service_cost_cash,
    service_cost_insurance,
    service_cost_foreigner,
  } = req.body;

  // create data

  try {
    sequelize
      .sync()
      .then(() => {
        PharmaceuticalStores.create(
          service_category,
          service_name,
          service_cost_cash,
          service_cost_insurance,
          service_cost_foreigner,
        );
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};

// get all priceListItems
const getPharmaceuticalItem = async (req, res, next) => {
  try {
    await sequelize.sync().then(() => {
      PharmaceuticalStores.findAll({ limit: 100 })
        .then((response) => {
          res.json(response);
          // res.sendStatus(200)
          next();
        })
        .catch((error) => next(error));
    });
  } catch (error) {
    next(error);
  }
};

const getPharmaceuticalItemById = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    PharmaceuticalStores.findOne({
      where: {
        id,
      },
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));
  });
};

const editPharmaceuticalItem = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    PharmaceuticalStores.findOne({
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
  addPharmaceuticalItem, getPharmaceuticalItem, getPharmaceuticalItemById, editPharmaceuticalItem,
};
