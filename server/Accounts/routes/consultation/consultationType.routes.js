/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addConsultationType, getAllConsultationTypes, getConsultationType,
  editConsultationTYpe, deleteConsultationType,
} = require('../../controllers/consultation/consultationType.controller');

const router = express.Router();

router.post('/add', addConsultationType);
router.get('/fetchAll', getAllConsultationTypes);
router.get('/detail/:id', getConsultationType);
router.put('/edit', editConsultationTYpe);
router.delete('/delete/:id', deleteConsultationType);

module.exports = router;
