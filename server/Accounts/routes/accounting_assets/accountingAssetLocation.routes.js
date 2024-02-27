/* eslint-disable import/no-unresolved */
const express = require('express');
const { addAccountingAssetLocation, getAccountingAssetLocationDetail, 
    getAllAccountingAssetLocations, editAccountingAssetLocation, 
    deleteAccountingAssetLocation } = require('../../controllers/accounting_assets/accountingAssetLocation.controller');

const router = express.Router();

router.post('/add', addAccountingAssetLocation);
router.get('/fetchAll', getAllAccountingAssetLocations);
router.get('/detail/:id', getAccountingAssetLocationDetail);
router.put('/edit/:id', editAccountingAssetLocation);
router.delete('/delete/:id', deleteAccountingAssetLocation);

module.exports = router;
