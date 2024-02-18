/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addServiceType, getAllServiceType, getServiceType, editServiceType, deleteServiceType,
} = require('../controllers/serviceType.controller');

const router = express.Router();

router.post('/add', addServiceType);
router.get('/fetchAll', getAllServiceType);
router.get('/detail/:id', getServiceType);
router.put('/edit', editServiceType);
router.delete('/delete/:id', deleteServiceType);

module.exports = router;
