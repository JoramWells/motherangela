/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const { Sequelize } = require('sequelize');
const sequelize = require('../db/connect');
const AccountingStores = require('../models/_accounts/accountingStore.model');


const addAccountingStore = async (req, res, next) => {
try {
  const results = await AccountingStores.create(req.body)
  res.json(results)
  next()

} catch (error) {
  next(error)
  console.log(error)
}      
};

const getAllAccountingStores = async (req, res, next) => {
  try {
    const results = await AccountingStores.findAll({});
    res.status(200).json(results);
    next();
  } catch (error) {
    console.log(error)
    next(error);
  }
};


const getAccountingStoreDetail = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    AccountingStores.findOne({
      where: {
        account_type_id: id,
      },
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));
  });
};

const editAccountingStore = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    AccountingStores.findOne({
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

const deleteAccountingStore = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    AccountingStores.destroy({
      where: {
        admission_id: id,
      },
    }).then((response) => {
      res.sendStatus(200).json(response);
      // console.log(response);
    });
  }).catch((err) => console.log(err));
};

module.exports = {
  addAccountingStore,
  getAllAccountingStores,
  getAccountingStoreDetail,
  editAccountingStore,
  deleteAccountingStore,
};
