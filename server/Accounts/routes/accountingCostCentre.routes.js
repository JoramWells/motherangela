/* eslint-disable import/no-unresolved */
const express = require('express');
const { addAccountingCostCentre, getAllAccountingCentres, getAccountingCostCentreDetail,
    editAccountingCostCentre, deleteAccountingCostCentre } = require('../controllers/accountingCostCentres.controller');

const router = express.Router();

router.post('/add', addAccountingCostCentre);
router.get('/fetchAll', getAllAccountingCentres);
router.get('/detail/:id', getAccountingCostCentreDetail);
router.put('/edit', editAccountingCostCentre);
router.delete('/delete/:id', deleteAccountingCostCentre);

module.exports = router;
