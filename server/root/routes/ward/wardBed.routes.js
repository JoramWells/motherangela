/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addWardBeds, getAllWardBeds, getWardBedsById, editWardBeds,
} = require('../../controllers/ward/wardBed.controller');

const router = express.Router();

// const newAppointment = new Appointment();

router.post('/add', addWardBeds);
router.get('/fetchAll', getAllWardBeds);
router.get('/detail/:id', getWardBedsById);
router.put('/edit', editWardBeds);
// router.delete('/delete/:id', deleteward);

module.exports = router;
