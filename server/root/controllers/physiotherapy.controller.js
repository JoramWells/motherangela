/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const Physiotherapies = require('../models/physiotherapy.model');

const addPhysioItem = async (req, res, next) => {
  const {
    itemName,
    unitMeasurement,
    unitPrice,
    quantity,
    physicalCount,
    variance,
  } = req.body;

  try {
  // create data
    await sequelize
      .sync()
      .then(() => {
        Physiotherapies.create(req.body)
          .then((response) => {
            res.json(response.data);
            next();
          })
          .catch((error) => {
            console.error('Unable to catch error: ', error);
          });
      });
  } catch (error) {
    console.log(error);
  }
};

// get all pricelists
const getAllPhysioItem = async (req, res, next) => {
  await sequelize.sync().then(() => {
    Physiotherapies.findAll({ limit: 100 })
      .then((response) => {
        // console.log(response);
        res.json(response);
        // res.sendStatus(200)
        next();
      })
      .catch((error) => console.error('Unable to retrieve data: ', error));
  });
};

const getPhysioItemDetail = async (req, res, next) => {
  const { id } = req.params;
  try {
    await sequelize.sync().then(() => {
      Physiotherapies.findOne({
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

const editPhysiotherapy = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    Physiotherapies.findOne({
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
  addPhysioItem, getAllPhysioItem, getPhysioItemDetail, editPhysiotherapy,
};
