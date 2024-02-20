/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const A_lab = require('../models/_lab/aLab.models');

const addAlab = async (req, res, next) => {
  try {
    const newAppointment = await A_lab.create(req.body);
    res.json(newAppointment);

    next();
  } catch (error) {
    res.sendStatus(500).json({ message: 'Internal server error!!' });
  }
};

// get all priceListItems
const getAllAlabs = async (req, res, next) => {
  try {
    const results = await A_lab.findAll({ limit: 100 });
    res.json(results);
    next();
  } catch (error) {
    console.log(error);
    next(error);
    res.sendStatus(500).json({ message: 'Internal server error!!' });
  }
};

const getAlab = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await A_lab.findOne({
      where: {
        lab_request_id: id,
      },
    });
    res.json(result);
    next();
  } catch (error) {
    res.sendStatus(500).json({ message: 'Internal Server Error' });
  }
};

const editAlab = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    A_lab.findOne({
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

const deleteAlab = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    A_lab.destroy({
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
  addAlab,
  getAllAlabs,
  getAlab,
  editAlab,
  deleteAlab,
};
