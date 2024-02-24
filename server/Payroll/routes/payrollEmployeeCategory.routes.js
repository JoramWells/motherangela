/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addPayrollEmployeeCategory, getAllPayrollEmployeeCategories,
  getPayrollEmployeeCategory, editPayrollEmployeeCategory, deletePayrollEmployeeCategory,
} = require('../controllers/payrollEmployeeCategory.controller');

const router = express.Router();

router.post('/add', addPayrollEmployeeCategory);
router.get('/fetchAll', getAllPayrollEmployeeCategories);
router.get('/detail/:id', getPayrollEmployeeCategory);
router.put('/edit', editPayrollEmployeeCategory);
router.delete('/delete/:id', deletePayrollEmployeeCategory);

module.exports = router;
