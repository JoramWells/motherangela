/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const { Sequelize } = require('sequelize');
const sequelize = require('../../db/connect');

const AccountingAssetCategory = require('../../models/assets/accountingAssetCategory.model');

const addAccountingAssetCategory = async (req, res, next) => {
  try {
    const results = await AccountingAssetCategory.create(req.body)
    res.json(results)
    next()

  } catch (error) {
    next(error)
    console.log(error)
  }
};

const getAllAccountingAssetCategories = async (req, res, next) => {
  try {
    const results = await AccountingAssetCategory.findAll({});
    res.status(200).json(results);
    next();
  } catch (error) {
    console.log(error)
    next(error);
  }
};


const getAccountingAssetCategoryDetail = async (req, res, next) => {
  const { id } = req.params;
  try {
    if(id !== 'null'){
    const results = await AccountingAssetCategory.findOne({
      where: {
        asset_category_id: id,
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

const editAccountingAssetCategory = async (req, res, next) => {
  const {id} = req.params
  const { asset_category_description} = req.body;
  try {
    const results = await AccountingAssetCategory.findOne({
      where: {
        asset_category_id: id,
      },
    })
    if(results){
    results.asset_category_description = asset_category_description
    results.save()
    }
    res.status(200).json(results)
    next()
  } catch (error) {
    next(error)
    console.log(error)
    
  }
};

const deleteAccountingAssetCategory = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    AccountingAssetCategory.destroy({
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
  addAccountingAssetCategory,
  getAllAccountingAssetCategories,
  getAccountingAssetCategoryDetail,
  editAccountingAssetCategory,
  deleteAccountingAssetCategory,
};
