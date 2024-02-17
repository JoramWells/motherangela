/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addMedicationStockTake, getAllMedicationStockTake,
  getMedicationStockTakeDetail, editMedicationStockTake, deleteMedicationStockTake,
} = require('../../controllers/medicinePurchases.controller copy');

const router = express.Router();

router.post('/add', addMedicationStockTake);
router.get('/fetchAll', getAllMedicationStockTake);
router.get('/detail/:id', getMedicationStockTakeDetail);
router.put('/edit', editMedicationStockTake);
router.delete('/delete/:id', deleteMedicationStockTake);

module.exports = router;
