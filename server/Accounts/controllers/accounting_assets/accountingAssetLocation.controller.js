/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const { Sequelize } = require('sequelize');
const sequelize = require('../../db/connect');
const AccountingAssetLocation = require('../../models/assets/accountingAssetLocation.model');


const addAccountingAssetLocation = async (req, res, next) => {
  try {
    const results = await AccountingAssetLocation.create(req.body)
    res.json(results)
    next()

  } catch (error) {
    next(error)
    console.log(error)
  }
};

const getAllAccountingAssetLocations = async (req, res, next) => {
  try {
    const results = await AccountingAssetLocation.findAll({});
    res.status(200).json(results);
    next();
  } catch (error) {
    console.log(error)
    next(error);
  }
};


const getAccountingAssetLocationDetail = async (req, res, next) => {
  const { id } = req.params;
  try {
    if(id !== 'null'){
      const results = await AccountingAssetLocation.findOne({
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

const editAccountingAssetLocation = async (req, res, next) => {
  const {id} = req.params
  const { asset_location_description} = req.body;
  try {
    const results = await AccountingAssetLocation.findOne({
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

const deleteAccountingAssetLocation = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    AccountingAssetLocation.destroy({
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
  addAccountingAssetLocation,
  getAllAccountingAssetLocations,
  getAccountingAssetLocationDetail,
  editAccountingAssetLocation,
  deleteAccountingAssetLocation,
};
