/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addPayrollDeductions, getAllPayrollDeductions,
  getPayrollDeduction, editPayrollDeduction, deletePayrollDeductions,
} = require('../../controllers/payroll/payrollDeductions.controller');

const router = express.Router();

router.post('/add', addPayrollDeductions);
router.get('/fetchAll', getAllPayrollDeductions);
router.get('/detail/:id', getPayrollDeduction);
router.put('/edit', editPayrollDeduction);
router.delete('/delete/:id', deletePayrollDeductions);

module.exports = router;
