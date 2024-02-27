/* eslint-disable import/no-unresolved */
const express = require('express');
const { addAccountingAssetCategory, getAllAccountingAssetCategories,
    getAccountingAssetCategoryDetail, editAccountingAssetCategory, deleteAccountingAssetCategory } = 
    require('../../controllers/accounting_assets/accountingAssetCategories.controller');

const router = express.Router();

router.post('/add', addAccountingAssetCategory);
router.get('/fetchAll', getAllAccountingAssetCategories);
router.get('/detail/:id', getAccountingAssetCategoryDetail);
router.put('/edit/:id', editAccountingAssetCategory);
router.delete('/delete/:id', deleteAccountingAssetCategory);

module.exports = router;
