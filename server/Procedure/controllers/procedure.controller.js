/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const Procedures = require('../models/_procedure/procedure.model');

const addProcedures = async (req, res, next) => {
  sequelize.sync().then(() => {
    Procedures.create(req.body)
      .then((response) => {
        res.json(response.data);
        next();
      })
      .catch((error) => console.error(error));
  });
};

// get all priceListItems
const getAllProcedures = async (req, res, next) => {
  try {
    const patients = await Procedures.findAll({ limit: 100 });
    res.json(patients);
    next();
  } catch (error) {
    res.sendStatus(500).json({ error: 'Internal Server error' });
    next(error);
  }
};

const getProcedureDetail = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Procedures.findOne({
      where: {
        id,
      },
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));
  });
};

const editProcedure = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    Procedures.findOne({
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
  addProcedures,
  getAllProcedures,
  getProcedureDetail,
  editProcedure,
};
