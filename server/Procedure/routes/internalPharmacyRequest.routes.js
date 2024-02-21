/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addInternalPharmacyRequest, getAllInternalPharmacyRequests, getInternalPharmacyRequest,
  editInternalPharmacyRequest, deleteInternalPharmacyRequest,
} = require('../controllers/internalPharmacyRequest.controller');
// const Appointment = require('../controllers/Appointment');

const router = express.Router();

// const newAppointment = new Appointment();

router.post('/add', addInternalPharmacyRequest);
router.get('/fetchAll', getAllInternalPharmacyRequests);
router.get('/detail/:id', getInternalPharmacyRequest);
router.put('/edit', editInternalPharmacyRequest);
router.delete('/delete/:id', deleteInternalPharmacyRequest);

module.exports = router;
