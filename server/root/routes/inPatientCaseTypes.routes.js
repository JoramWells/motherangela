/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addInPatientCaseType, getAllInPatientCaseType,
  getInPatientCaseTypeDetail, editInPatientCaseType, deleteInPatientCaseType,
} = require('../controllers/inPatientCaseTypes.controller');

const router = express.Router();

router.post('/add', addInPatientCaseType);
router.get('/fetchAll', getAllInPatientCaseType);
router.get('/detail/:id', getInPatientCaseTypeDetail);
router.put('/edit', editInPatientCaseType);
router.delete('/delete/:id', deleteInPatientCaseType);

module.exports = router;
