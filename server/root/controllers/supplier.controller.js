/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const Suppliers = require('../models/suppliers.model');

const addSupplier = async (req, res, next) => {
  sequelize.sync().then(() => {
    Suppliers.create(req.body)
      .then((response) => {
        res.json(response.data);
        next();
      })
      .catch((error) => console.error(error));
  });
};

// get all priceListItems
const getAllSupplier = async (req, res, next) => {
  try {
    await sequelize.sync().then(() => {
      Suppliers.findAll({ limit: 100 })
        .then((response) => {
          // console.log(response);
          res.status(200).json(response);
          // res.sendStatus(200)
          next();
        })
        .catch((error) => {
          console.log(error);
          next(error);
        });
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const getSupplierDetail = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Suppliers.findOne({
      where: {
        id,
      },
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));
  });
};

const editSupplier = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    Suppliers.findOne({
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

const deleteSupplier = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Suppliers.destroy({
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
  addSupplier, getAllSupplier, getSupplierDetail, editSupplier, deleteSupplier,
};
