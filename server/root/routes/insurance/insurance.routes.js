const express = require('express');
const { addInsurance, getAllInsurances, getInsuranceDetail } = require('../../controllers/insurance/insurance.controller');

const router = express.Router();

router.post('/add', addInsurance);
router.get('/fetchAll', getAllInsurances);
router.get('/detail/:id', getInsuranceDetail);

module.exports = router;
