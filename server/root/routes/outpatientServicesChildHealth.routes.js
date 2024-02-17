/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  editOutPatientServicesCH, getOutPatientServicesCHDetail,
  getAllOutPatientServicesCH, addOutPatientServicesCH,
} = require('../controllers/outpatientServicesChildHealth');

const router = express.Router();

router.post('/add', addOutPatientServicesCH);
router.get('/fetchAll', getAllOutPatientServicesCH);
router.get('/detail/:id', getOutPatientServicesCHDetail);
router.put('/edit', editOutPatientServicesCH);

module.exports = router;
