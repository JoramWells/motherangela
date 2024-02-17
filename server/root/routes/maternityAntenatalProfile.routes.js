/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addMaternityAntenatalProfile, getAllMaternityAntenatalProfile,
  getMaternityAntenatalProfileDetail, editMaternityAntenatalProfile,
  deleteMaternityAntenatalProfile,
} = require('../controllers/maternity/maternityAntenatalProfile.controller');

const router = express.Router();

router.post('/add', addMaternityAntenatalProfile);
router.get('/fetchAll', getAllMaternityAntenatalProfile);
router.get('/detail/:id', getMaternityAntenatalProfileDetail);
router.put('/edit', editMaternityAntenatalProfile);
router.delete('/delete/:id', deleteMaternityAntenatalProfile);

module.exports = router;
