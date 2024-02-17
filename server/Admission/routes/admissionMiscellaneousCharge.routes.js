/* eslint-disable import/no-unresolved */
const express = require('express');

const {
  addAdmissionMiscellaneousCharges,
  getAllAdmissionMiscellaneousCharges,
  getAdmissionMiscellaneousChargesDetail,
  editAdmissionMiscellaneousCharges,
} = require('../controllers/admissionMiscelleneousCharges.controller');

const router = express.Router();

router.post('/add', addAdmissionMiscellaneousCharges);
router.get('/fetchAll', getAllAdmissionMiscellaneousCharges);
router.get('/detail/:id', getAdmissionMiscellaneousChargesDetail);
router.put('/edit', editAdmissionMiscellaneousCharges);
// router.delete('/delete/:id', deleteAdmission);

module.exports = router;
