/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const PriceListsItems = require('../models/priceListItems.model');

const addPriceListItem = async (req, res, next) => {
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
        PriceListsItems.create(
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
const getAllPriceListItems = async (req, res, next) => {
  try {
     const results = await PriceListsItems.findAll();
          // console.log(response);
      res.status(200).json(results);
          // res.sendStatus(200)
      next();
  } catch (error) {
    console.log(error)
    next(error);
  }
};

const getPriceListItemById = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    PriceListsItems.findOne({
      where: {
        id,
      },
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));
  });
};

const editPriceListItem = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    PriceListsItems.findOne({
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
  addPriceListItem, getAllPriceListItems, getPriceListItemById, editPriceListItem,
};
