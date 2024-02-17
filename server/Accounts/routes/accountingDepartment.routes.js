/* eslint-disable import/no-unresolved */
const express = require('express');
const { addAccountingDepartment, getAllAccountingDepartment, getAccountingDepartmentDetail, editAccountingDepartment, deleteAccountingDepartment } = require('../controllers/accountingDepartment.controller');

const router = express.Router();

router.post('/add', addAccountingDepartment);
router.get('/fetchAll', getAllAccountingDepartment);
router.get('/detail/:id', getAccountingDepartmentDetail);
router.put('/edit', editAccountingDepartment);
router.delete('/delete/:id', deleteAccountingDepartment);

module.exports = router;
