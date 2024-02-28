/* eslint-disable import/no-unresolved */
const express = require('express');
const { addAccountingAsset, getAllAccountingAssets, getAccountingAsset,
    editAccountingAsset, deleteAccountingAsset } = require('../../controllers/accounting_assets/accountingAssets.controller');

const router = express.Router();

router.post('/add', addAccountingAsset);
router.get('/fetchAll', getAllAccountingAssets);
router.get('/detail/:id', getAccountingAsset);
router.put('/edit/:id', editAccountingAsset);
router.delete('/delete/:id', deleteAccountingAsset);

module.exports = router;
