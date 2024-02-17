/* eslint-disable import/no-unresolved */
const express = require('express');
const { addSpecimenType, getAllSpecimenTypes, getSpecimenTypeDetail, editSpecimenType, deleteSpecimenType } = require('../controllers/specimenType.controller');

const router = express.Router();

// const newAppointment = new Appointment();

router.post('/add', addSpecimenType);
router.get('/fetchAll', getAllSpecimenTypes);
router.get('/detail/:id', getSpecimenTypeDetail);
router.put('/edit', editSpecimenType);
router.delete('/delete/:id', deleteSpecimenType);

module.exports = router;
