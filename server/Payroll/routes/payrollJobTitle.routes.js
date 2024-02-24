/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addPayrollJobTitle, getAllPayrollJobTitles,
  getPayrollJobTitle, editPayrollJobTitle, deletePayrollJobTitle,
} = require('../../controllers/payroll/payrollJobTitles.controller');

const router = express.Router();

router.post('/add', addPayrollJobTitle);
router.get('/fetchAll', getAllPayrollJobTitles);
router.get('/detail/:id', getPayrollJobTitle);
router.put('/edit', editPayrollJobTitle);
router.delete('/delete/:id', deletePayrollJobTitle);

module.exports = router;
