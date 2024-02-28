/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const { Sequelize } = require('sequelize');
const sequelize = require('../../db/connect');
const AccountingAssets = require('../../models/assets/accountingAsset.model');
const AccountingAssetCategory = require('../../models/assets/accountingAssetCategory.model');
const AccountingAssetLocation = require('../../models/assets/accountingAssetLocation.model');
const AccountingAssetStatus = require('../../models/assets/accountingAssetStatus.model');


const addAccountingAsset = async (req, res, next) => {
  try {
    const results = await AccountingAssets.create(req.body)
    res.json(results)
    next()

  } catch (error) {
    next(error)
    console.log(error)
  }
};

const getAllAccountingAssets = async (req, res, next) => {
  try {
    const results = await AccountingAssets.findAll({
      include:[
        {
          model: AccountingAssetCategory,
          attributes:['asset_category_description']
        },
        {
          model: AccountingAssetLocation,
          attributes:['asset_location_description']

        },
        {
          model:AccountingAssetStatus,
          attributes:['asset_status_description']
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


const getAccountingAsset = async (req, res, next) => {
  const { id } = req.params;
  try {
    if(id !== 'null'){
      const results = await AccountingAssets.findOne({
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

const editAccountingAsset = async (req, res, next) => {
  const {id} = req.params
  const { asset_category_description} = req.body;
  try {
    const results = await AccountingAssets.findOne({
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

const deleteAccountingAsset = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    AccountingAssets.destroy({
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
  addAccountingAsset,
  getAllAccountingAssets,
  getAccountingAsset,
  editAccountingAsset,
  deleteAccountingAsset,
};
