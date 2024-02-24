/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addPayrollPayTypes, getAllPayrollPayType,
  getPayrollPayType, editPayrollPayType, deletePayrollPayType,
} = require('../controllers/payrollPayTypes.controller');

const router = express.Router();

router.post('/add', addPayrollPayTypes);
router.get('/fetchAll', getAllPayrollPayType);
router.get('/detail/:id', getPayrollPayType);
router.put('/edit', editPayrollPayType);
router.delete('/delete/:id', deletePayrollPayType);

module.exports = router;
