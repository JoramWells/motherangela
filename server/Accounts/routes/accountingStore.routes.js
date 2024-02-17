/* eslint-disable import/no-unresolved */
const express = require('express');
const { addAccountingStore, getAllAccountingStores, getAccountingStoreDetail, editAccountingStore, deleteAccountingStore } = require('../controllers/accountingStore.controller');

const router = express.Router();

router.post('/add', addAccountingStore);
router.get('/fetchAll', getAllAccountingStores);
router.get('/detail/:id', getAccountingStoreDetail);
router.put('/edit', editAccountingStore);
router.delete('/delete/:id', deleteAccountingStore);

module.exports = router;
