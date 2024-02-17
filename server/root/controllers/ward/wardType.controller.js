/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../../db/connect');
const WardType = require('../../models/ward/wardType.model');

const addWardType = async (req, res, next) => {
  // create data
  try {
    const newType = await WardType.create(req.body);
    res.json(newType);
    next();
  } catch (error) {
    res.json({ message: 'Internal server error' });
    next(error);
  }
};

// get all pricelists
const getAllWardTypes = async (req, res, next) => {
  try {
    const wardTypes = await WardType.findAll({ limit: 100 });
    // console.log(response);
    res.json(wardTypes);
    // res.sendStatus(200)
    next();
  } catch (error) {
    next(error);
    res.json({ message: 'Internal server error' });
  }
};

const getWardTypeById = async (req, res, next) => {
  const { id } = req.params;
  try {
    await sequelize.sync().then(() => {
      WardType.findOne({
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

const editWardType = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    WardType.findOne({
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
  addWardType, getAllWardTypes, getWardTypeById, editWardType,
};
