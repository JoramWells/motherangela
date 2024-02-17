/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../../db/connect');
const Wards = require('../../models/ward/ward.model');

const addWard = async (req, res, next) => {
  // create data
  await sequelize
    .sync()
    .then(() => {
      Wards.create(req.body).then(() => {
        res.sendStatus(200);
      });
    })
    .catch((error) => {
      console.error('Unable to catch error: ', error);
    });
};

// get all pricelists
const getAllWards = async (req, res, next) => {
  try {
    const results = await Wards.findAll()
    res.json(results)
    // console.log(response);
    // res.sendStatus(200)
    next();
  } catch (error) {
    console.log(error)
    next(error)

  }
};

const getWardById = async (req, res, next) => {
  const { id } = req.params;
  try {
    await sequelize.sync().then(() => {
      Wards.findOne({
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

const editWard = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    Wards.findOne({
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
  addWard, getAllWards, getWardById, editWard,
};
