/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addAdmissionCategory, getAllAdmissionCategory,
  getAdmissionDetailCategory, editAdmissionDetailCategory,
} = require('../controllers/admissionCategory.controller');

const router = express.Router();

router.post('/add', addAdmissionCategory);
router.get('/fetchAll', getAllAdmissionCategory);
router.get('/detail/:id', getAdmissionDetailCategory);
router.put('/edit', editAdmissionDetailCategory);
// router.delete('/delete/:id', deleteAdmission);

module.exports = router;
