/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addPayrollEmployeeDeduction, getAllPayrollEmployeeDeductions,
  getPayrollEmployeeDeduction, editPayrollEmployeeDeduction, deletePayrollEmployeeDeduction,
} = require('../../controllers/payroll/payrollEmployeeDeductions.controller');

const router = express.Router();

router.post('/add', addPayrollEmployeeDeduction);
router.get('/fetchAll', getAllPayrollEmployeeDeductions);
router.get('/detail/:id', getPayrollEmployeeDeduction);
router.put('/edit', editPayrollEmployeeDeduction);
router.delete('/delete/:id', deletePayrollEmployeeDeduction);

module.exports = router;
