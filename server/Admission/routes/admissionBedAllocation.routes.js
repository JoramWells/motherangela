/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addAdmissionBedAllocation,
  getAllAdmissionBedAllocation,
  getAdmissionBedAllocation, editAdmissionBedAllocation,
} = require('../controllers/admissionBedAllocation.controller');

const router = express.Router();

router.post('/add', addAdmissionBedAllocation);
router.get('/fetchAll', getAllAdmissionBedAllocation);
router.get('/detail/:id', getAdmissionBedAllocation);
router.put('/edit', editAdmissionBedAllocation);

module.exports = router;
