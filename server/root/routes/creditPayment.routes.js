/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addCreditPayment, getAllCreditPayment, getCreditPaymentDetail,
  editCreditPayment, deleteCreditPayment,
} = require('../controllers/creditPayment/creditPayment.controller');

const router = express.Router();

router.post('/add', addCreditPayment);
router.get('/fetchAll', getAllCreditPayment);
router.get('/detail/:id', getCreditPaymentDetail);
router.put('/edit', editCreditPayment);
router.delete('/delete/:id', deleteCreditPayment);

module.exports = router;
