/* eslint-disable import/no-unresolved */
const express = require('express');
const { addAccountingBankReconciliation, getAllAccountingBankReconciliations, getAccountingBankReconciliationDetail, editAccountingBankReconciliation, deleteAccountingBankReconciliation } = require('../../controllers/accounting_assets/accountingBankReconciliation.controller');

const router = express.Router();

router.post('/add', addAccountingBankReconciliation);
router.get('/fetchAll', getAllAccountingBankReconciliations);
router.get('/detail/:id', getAccountingBankReconciliationDetail);
router.put('/edit/:id', editAccountingBankReconciliation);
router.delete('/delete/:id', deleteAccountingBankReconciliation);

module.exports = router;
