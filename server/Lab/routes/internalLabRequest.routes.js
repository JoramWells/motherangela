/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addInternalLabRequest, getAllInternalLabRequests,
  getInternalLabRequest, editInternalLabRequest, deleteInternalLabRequest,
} = require('../controllers/internalLabRequests.controller');

const router = express.Router();

// const newAppointment = new Appointment();

router.post('/add', addInternalLabRequest);
router.get('/fetchAll', getAllInternalLabRequests);
router.get('/detail/:id', getInternalLabRequest);
router.put('/edit', editInternalLabRequest);
router.delete('/delete/:id', deleteInternalLabRequest);

module.exports = router;
