const express = require('express');
const { addDrugs, getAllDrugs } = require('../controllers/drugs.controller');

const router = express.Router();

router.post('/add', addDrugs);
router.get('/fetchAll', getAllDrugs);

module.exports = router;
