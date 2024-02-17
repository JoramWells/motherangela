/* eslint-disable import/no-unresolved */
const express = require('express');
const {
 addEligibility, getAllEligibility, getAllEligibilityById, editEligibilityDetail, deleteEligibility,
} = require('../controllers/eligibility.controller');

const router = express.Router();

router.post('/add', addEligibility);
router.get('/fetchAll', getAllEligibility);
router.get('/detail/:id', getAllEligibilityById);
router.put('/edit', editEligibilityDetail);
router.delete('/delete/:id', deleteEligibility);

module.exports = router;
