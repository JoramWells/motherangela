/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addInsuranceServiceCostMapping, getAllInsuranceServiceCostMapping,
  getInsuranceServiceCostMapping, editInsuranceServiceCostMapping,
  deleteInsuranceServiceCostMapping,
} = require('../../controllers/insurance/insuranceServiceCostMapping.controller');

const router = express.Router();

router.post('/add', addInsuranceServiceCostMapping);
router.get('/fetchAll', getAllInsuranceServiceCostMapping);
router.get('/detail/:id', getInsuranceServiceCostMapping);
router.put('/edit', editInsuranceServiceCostMapping);
router.delete('/delete/:id', deleteInsuranceServiceCostMapping);

module.exports = router;
