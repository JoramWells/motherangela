/* eslint-disable import/no-unresolved */
const express = require('express');
const { addConsultationTypeGroup, getAllConsultationTypeGroups, getConsultationTypeGroup, editConsultationTypeGroup, deleteConsultationTypeGroup } = require('../../controllers/consultation/consultationTypeGroups.controller');

const router = express.Router();

router.post('/add', addConsultationTypeGroup);
router.get('/fetchAll', getAllConsultationTypeGroups);
router.get('/detail/:id', getConsultationTypeGroup);
router.put('/edit', editConsultationTypeGroup);
router.delete('/delete/:id', deleteConsultationTypeGroup);

module.exports = router;
