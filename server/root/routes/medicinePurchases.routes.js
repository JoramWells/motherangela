/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addMedicationPurchases, getAllMedicationPurchases,
  getMedicationPurchaseDetail, editMedicationPurchase, deleteMedicationPurchase,
} = require('../controllers/medicinePurchases.controller');

const router = express.Router();

router.post('/add', addMedicationPurchases);
router.get('/fetchAll', getAllMedicationPurchases);
router.get('/detail/:id', getMedicationPurchaseDetail);
router.put('/edit', editMedicationPurchase);
router.delete('/delete/:id', deleteMedicationPurchase);

module.exports = router;
