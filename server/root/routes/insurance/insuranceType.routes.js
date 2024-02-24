/* eslint-disable import/no-unresolved */
const express = require('express');
const { addInsuranceType, getAllInsuranceType, getInsuranceTypeDetail, editMedicationInsuranceType, deleteInsuranceType } = require('../../controllers/insurance/insuranceType.controller');

const router = express.Router();

router.post('/add', addInsuranceType);
router.get('/fetchAll', getAllInsuranceType);
router.get('/detail/:id', getInsuranceTypeDetail);
router.put('/edit', editMedicationInsuranceType);
router.delete('/delete/:id', deleteInsuranceType);

module.exports = router;
