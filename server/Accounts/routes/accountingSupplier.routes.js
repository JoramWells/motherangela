/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addAccountingSupplier, getAllAccountingSuppliers, getAccountingSupplierDetail,
  editAccountingSupplier, deleteAccountingSupplier,
} = require('../controllers/accountingSuppliers.controller');

const router = express.Router();

router.post('/add', addAccountingSupplier);
router.get('/fetchAll', getAllAccountingSuppliers);
router.get('/detail/:id', getAccountingSupplierDetail);
router.put('/edit', editAccountingSupplier);
router.delete('/delete/:id', deleteAccountingSupplier);

module.exports = router;
