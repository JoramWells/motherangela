/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const { Sequelize } = require('sequelize');
const sequelize = require('../../db/connect');
const AccountingBankReconciliation = require('../../models/_accounts/banks/accountingBankReconciliation.model');
const AccountingAccountDetails = require('../../models/_accounts/accountingAccountDetails.model');


const addAccountingBankReconciliation = async (req, res, next) => {
  try {
    const results = await AccountingBankReconciliation.create(req.body)
    res.json(results)
    next()

  } catch (error) {
    next(error)
    console.log(error)
  }
};

const getAllAccountingBankReconciliations = async (req, res, next) => {
  try {
    const results = await AccountingBankReconciliation.findAll({
      include:[
        {
          model:AccountingAccountDetails,
          attributes:['account_name']
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


const getAccountingBankReconciliationDetail = async (req, res, next) => {
  const { id } = req.params;
  try {
    if(id !== 'null'){
      const results = await AccountingBankReconciliation.findOne({
      where: {
          asset_location_id: id,
      },
    })
    res.status(200).json(results)}
    else(res.status(200).json())
    next()
  } catch (error) {
    next(error)
    console.error(error)
  }
};

const editAccountingBankReconciliation = async (req, res, next) => {
  const {id} = req.params
  const { asset_location_description} = req.body;
  try {
    const results = await AccountingBankReconciliation.findOne({
      where: {
        asset_location_id: id,
      },
    })
    if(results){
    results.asset_location_description = asset_location_description
    results.save()
    }
    res.status(200).json(results)
    next()
  } catch (error) {
    next(error)
    console.log(error)
    
  }
};

const deleteAccountingBankReconciliation = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    AccountingBankReconciliation.destroy({
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
  addAccountingBankReconciliation,
  getAllAccountingBankReconciliations,
  getAccountingBankReconciliationDetail,
  editAccountingBankReconciliation,
  deleteAccountingBankReconciliation,
};
