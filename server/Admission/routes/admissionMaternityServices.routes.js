/* eslint-disable import/no-unresolved */
const express = require('express');

const {
  addAdmissionMaternityServices, getAllAdmissionMaternityServices,
  getAdmissionMaternityServicesDetail, editAdmissionMaternityServices,
} = require('../controllers/admissionMaternityServices.controller');

const router = express.Router();

router.post('/add', addAdmissionMaternityServices);
router.get('/fetchAll', getAllAdmissionMaternityServices);
router.get('/detail/:id', getAdmissionMaternityServicesDetail);
router.put('/edit', editAdmissionMaternityServices);

module.exports = router;
