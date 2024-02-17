/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addAccountingItem, getAllAccountingItem, getAccountingItem,
  editAccountingItem, deleteAccountingItem,
} = require('../controllers/accountingItem.controller');

const router = express.Router();

router.post('/add', addAccountingItem);
router.get('/fetchAll', getAllAccountingItem);
router.get('/detail/:id', getAccountingItem);
router.put('/edit', editAccountingItem);
router.delete('/delete/:id', deleteAccountingItem);

module.exports = router;
