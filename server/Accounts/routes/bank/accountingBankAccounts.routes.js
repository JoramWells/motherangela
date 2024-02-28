/* eslint-disable import/no-unresolved */
const express = require('express');
const { addAccountingBankAccounts, getAllAccountingBankAccounts,
    getAccountingBankAccounts, editAccountingBankAccounts,
    deleteAccountingBankAccounts } = require('../../controllers/banks/accountingBankAccounts');

const router = express.Router();

router.post('/add', addAccountingBankAccounts);
router.get('/fetchAll', getAllAccountingBankAccounts);
router.get('/detail/:id', getAccountingBankAccounts);
router.put('/edit/:id', editAccountingBankAccounts);
router.delete('/delete/:id', deleteAccountingBankAccounts);

module.exports = router;
