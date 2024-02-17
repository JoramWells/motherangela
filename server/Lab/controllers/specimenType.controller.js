/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const SpecimenTypes = require('../models/_lab/specimenTypes.model');



const addSpecimenType = async (req, res, next) => {
  try {
    const results = await SpecimenTypes.create(req.body);
    res.json(results);

    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: 'Internal server error!!' });
  }
};

// get all priceListItems
const getAllSpecimenTypes = async (req, res, next) => {
  try {
    const results = await SpecimenTypes.findAll({});
    res.json(results);
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: 'Internal server error!!' });
    next(error);
  }
};

const getSpecimenTypeDetail = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await SpecimenTypes.findAll({
      where: {
        lab_request_id: id,
      },
    });
    res.json(result);
    next();
  } catch (error) {
    console.log(error);
    res.send('Internal Server Error');
    next(error);
  }
};

const editSpecimenType = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    SpecimenTypes.findOne({
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

const deleteSpecimenType = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    SpecimenTypes.destroy({
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
  addSpecimenType,
  getAllSpecimenTypes,
  getSpecimenTypeDetail,
  editSpecimenType,
  deleteSpecimenType,
};
