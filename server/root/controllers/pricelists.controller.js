/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const PriceLists = require('../models/pricelists.model');

const addPriceList = async (req, res, next) => {
  const {
    service_category,
    service_name,
    service_cost_cash,
    service_cost_insurance,
    service_cost_foreigner,
  } = req.body;

  // create data
  sequelize
    .sync()
    .then(() => {
      PriceLists.create(
        service_category,
        service_name,
        service_cost_cash,
        service_cost_insurance,
        service_cost_foreigner,
      );
    })
    .catch((error) => {
      console.error('Unable to catch error: ', error);
    });
};

// get all pricelists
const getAllPriceLists = async (req, res, next) => {
  await sequelize.sync().then(() => {
    PriceLists.findAll({ limit: 100 })
      .then((response) => {
        // console.log(response);
        res.json(response);
        // res.sendStatus(200)
        next();
      })
      .catch((error) => console.error('Unable to retrieve data: ', error));
  });
};

const getPriceListById = async (req, res, next) => {
  const { id } = req.params;
  try {
    await sequelize.sync().then(() => {
      PriceLists.findOne({
        where: {
          id,
        },
      }).then((response) => {
        res.status(200).json(response);
      }).catch((error) => res.status(404).json(error.message));
    });
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const editPriceList = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    PriceLists.findOne({
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
  addPriceList, getAllPriceLists, getPriceListById, editPriceList,
};
