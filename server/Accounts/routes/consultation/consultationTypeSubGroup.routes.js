/* eslint-disable import/no-unresolved */
const express = require('express');
const { addConsultationSubTypeGroup, getAllConsultationTypeSubGroups,
    getConsultationTypeSubGroup, editConsultationTypeSubGroup,
    deleteConsultationTypeSubGroup } = require('../../controllers/consultation/consultationTypeSubGroups.controller');

const router = express.Router();

router.post('/add', addConsultationSubTypeGroup);
router.get('/fetchAll', getAllConsultationTypeSubGroups);
router.get('/detail/:id', getConsultationTypeSubGroup);
router.put('/edit', editConsultationTypeSubGroup);
router.delete('/delete/:id', deleteConsultationTypeSubGroup);

module.exports = router;
