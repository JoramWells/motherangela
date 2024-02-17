/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addMedicationCategory, getAllMedicationCategories,
  getMedicationCategoryDetail, editMedicationCategory, deleteMedicationCategory,
} = require('../../controllers/medication/medicationCategory.controller');

const router = express.Router();

router.post('/add', addMedicationCategory);
router.get('/fetchAll', getAllMedicationCategories);
router.get('/detail/:id', getMedicationCategoryDetail);
router.put('/edit', editMedicationCategory);
router.delete('/delete/:id', deleteMedicationCategory);

module.exports = router;
