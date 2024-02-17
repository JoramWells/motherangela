/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addPersonalAccountCharge, getAllPersonalAccountCharges,
  getPersonalAccountCharge, editPersonalAccountCharge, deletePersonalAccountCharge,
  getUserPersonalAccountCharge,
} = require('../../controllers/charges/personalAccountCharges.controller');

const router = express.Router();

router.post('/add', addPersonalAccountCharge);
router.get('/fetchAll', getAllPersonalAccountCharges);
router.get('/detail/:id', getPersonalAccountCharge);
router.put('/edit', editPersonalAccountCharge);
router.delete('/delete/:id', deletePersonalAccountCharge);
router.get('/user-personal-account-detail/:id', getUserPersonalAccountCharge);

module.exports = router;
