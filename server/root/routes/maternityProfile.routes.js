/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addMaternityProfile, getAllMaternityProfile, getMaternityProfileDetail,
  editMaternityProfile, deleteMaternityProfile,
} = require('../controllers/maternity/maternityProfile.controller');

const router = express.Router();

router.post('/add', addMaternityProfile);
router.get('/fetchAll', getAllMaternityProfile);
router.get('/detail/:id', getMaternityProfileDetail);
router.put('/edit', editMaternityProfile);
router.delete('/delete/:id', deleteMaternityProfile);

module.exports = router;
