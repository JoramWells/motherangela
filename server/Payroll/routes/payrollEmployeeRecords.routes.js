/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addPayrollEmployeeRecord, getAllPayrollEmployeeRecords,
  getPayrollEmployeeRecord, editPayrollEmployeeRecord, deletePayrollEmployeeRecord,
} = require('../../controllers/payroll/payrollEmployeeRecords.controller');

const router = express.Router();

router.post('/add', addPayrollEmployeeRecord);
router.get('/fetchAll', getAllPayrollEmployeeRecords);
router.get('/detail/:id', getPayrollEmployeeRecord);
router.put('/edit', editPayrollEmployeeRecord);
router.delete('/delete/:id', deletePayrollEmployeeRecord);

module.exports = router;
