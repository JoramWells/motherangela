/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const { Sequelize } = require('sequelize');
const sequelize = require('../db/connect');
const AccountingAccountDetails = require('../models/_accounts/accountingAccountDetails.model');


const addAccountingAccountDetail = async (req, res, next) => {
try {
  const results = await AccountingAccountDetails.create(req.body)
  res.json(results)
  next()

} catch (error) {
  next(error)
  console.log(error)
}      
};

const getAllAccountingAccountDetails = async (req, res, next) => {
  try {
    const results = await AccountingAccountDetails.findAll({
      include:[
        {
          model:AccountingDepartment,
          attributes:['department_name']
        }
      ]
    });
    res.status(200).json(results);
    next();
  } catch (error) {
    console.log(error)
    next(error);
  }
};


const getAccountingAccountDetail = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    AccountingAccountDetails.findOne({
      where: {
        account_type_id: id,
      },
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));
  });
};

const editAccountingAccountDetail = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    AccountingAccountDetails.findOne({
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

const deleteAccountingAccountDetail = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    AccountingAccountDetails.destroy({
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
  addAccountingAccountDetail,
  getAllAccountingAccountDetails,
  getAccountingAccountDetail,
  editAccountingAccountDetail,
  deleteAccountingAccountDetail,
};
