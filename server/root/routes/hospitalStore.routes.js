/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addHospitalStore, getAllHospitalStore,
  getHospitalStoreDetail, editHospitalStore, deleteHospitalStore,
} = require('../controllers/hospitalStores.controller');

const router = express.Router();

router.post('/add', addHospitalStore);
router.get('/fetchAll', getAllHospitalStore);
router.get('/detail/:id', getHospitalStoreDetail);
router.put('/edit', editHospitalStore);
router.delete('/delete/:id', deleteHospitalStore);

module.exports = router;
