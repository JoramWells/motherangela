/* eslint-disable import/no-unresolved */
const express = require('express');
const { addAccountingAccountDetail, getAllAccountingAccountDetails, getAccountingAccountDetail, editAccountingAccountDetail, deleteAccountingAccountDetail } = require('../controllers/accountingAccountDetails.model');

const router = express.Router();

router.post('/add', addAccountingAccountDetail);
router.get('/fetchAll', getAllAccountingAccountDetails);
router.get('/detail/:id', getAccountingAccountDetail);
router.put('/edit', editAccountingAccountDetail);
router.delete('/delete/:id', deleteAccountingAccountDetail);

module.exports = router;
