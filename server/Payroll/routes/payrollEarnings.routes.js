/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addPayrollEarnings, getAllPayrollEarnings, getPayrollEarning,
  editPayrollEarning, deletePayrollEarnings,
} = require('../../root/controllers/payroll/payrollEarnings.controller');

const router = express.Router();

router.post('/add', addPayrollEarnings);
router.get('/fetchAll', getAllPayrollEarnings);
router.get('/detail/:id', getPayrollEarning);
router.put('/edit', editPayrollEarning);
router.delete('/delete/:id', deletePayrollEarnings);

module.exports = router;
