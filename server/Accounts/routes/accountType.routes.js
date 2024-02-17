/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addAccountType, getAllAccountTypes, getAccountTypeDetail, editAccountType, deleteAccountType,
} = require('../controllers/accountType.controller');

const router = express.Router();

router.post('/add', addAccountType);
router.get('/fetchAll', getAllAccountTypes);
router.get('/detail/:id', getAccountTypeDetail);
router.put('/edit', editAccountType);
router.delete('/delete/:id', deleteAccountType);

module.exports = router;
