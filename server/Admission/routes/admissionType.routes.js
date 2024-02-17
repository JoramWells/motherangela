/* eslint-disable import/no-unresolved */
const express = require('express');
const { addAdmissionType, getAllAdmissionType, getAdmissionDetailType } = require('../controllers/admissionType.controller');

const router = express.Router();

router.post('/add', addAdmissionType);
router.get('/fetchAll', getAllAdmissionType);
router.get('/detail/:id', getAdmissionDetailType);
// router.put('/edit', editadmissty);
// router.delete('/delete/:id', deleteAdmission);

module.exports = router;
