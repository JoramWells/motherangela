/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addInsuranceMedicationMapping, getAllInsuranceMedicationMapping,
  getInsuranceMedicationMappingDetail, editMedicationInsuranceMedicationMapping,
  deleteInsuranceMedicationMapping,
} = require('../../controllers/insurance/insuranceMedicationMapping');

const router = express.Router();

router.post('/add', addInsuranceMedicationMapping);
router.get('/fetchAll', getAllInsuranceMedicationMapping);
router.get('/detail/:id', getInsuranceMedicationMappingDetail);
router.put('/edit', editMedicationInsuranceMedicationMapping);
router.delete('/delete/:id', deleteInsuranceMedicationMapping);

module.exports = router;
