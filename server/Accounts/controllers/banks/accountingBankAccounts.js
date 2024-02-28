/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const { Sequelize } = require('sequelize');
const sequelize = require('../../db/connect');
const AccountingBankAccounts = require('../../models/_accounts/banks/accountingBanksAccount.model');
const AccountingAccountDetails = require('../../models/_accounts/accountingAccountDetails.model');


const addAccountingBankAccounts = async (req, res, next) => {
  try {
    const results = await AccountingBankAccounts.create(req.body)
    res.json(results)
    next()

  } catch (error) {
    next(error)
    console.log(error)
  }
};

const getAllAccountingBankAccounts = async (req, res, next) => {
  try {
    const results = await AccountingBankAccounts.findAll({
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


const getAccountingBankAccounts = async (req, res, next) => {
  const { id } = req.params;
  try {
    if(id !== 'null'){
      const results = await AccountingBankAccounts.findOne({
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

const editAccountingBankAccounts = async (req, res, next) => {
  const {id} = req.params
  const { asset_location_description} = req.body;
  try {
    const results = await AccountingBankAccounts.findOne({
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

const deleteAccountingBankAccounts = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    AccountingBankAccounts.destroy({
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
  addAccountingBankAccounts,
  getAllAccountingBankAccounts,
  getAccountingBankAccounts,
  editAccountingBankAccounts,
  deleteAccountingBankAccounts,
};
