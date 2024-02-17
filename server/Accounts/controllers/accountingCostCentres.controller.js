/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const { Sequelize } = require('sequelize');
const sequelize = require('../db/connect');
const AccountingCostCentres = require('../models/_accounts/accountingCostCentres.model');
const AccountingDepartment = require('../models/_accounts/accountingDepartment.model');

const addAccountingCostCentre = async (req, res, next) => {
try {
  const results = await AccountingCostCentres.create(req.body)
  res.json(results)
  next()

} catch (error) {
  next(error)
  console.log(error)
}      
};

const getAllAccountingCentres = async (req, res, next) => {
  try {
    const results = await AccountingCostCentres.findAll({
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


const getAccountingCostCentreDetail = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    AccountingCostCentres.findOne({
      where: {
        account_type_id: id,
      },
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));
  });
};

const editAccountingCostCentre = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    AccountingCostCentres.findOne({
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

const deleteAccountingCostCentre = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    AccountingCostCentres.destroy({
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
  addAccountingCostCentre,
  getAllAccountingCentres,
  getAccountingCostCentreDetail,
  editAccountingCostCentre,
  deleteAccountingCostCentre,
};
