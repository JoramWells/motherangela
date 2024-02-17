const express = require('express');
const { addWard, getAllWards, getWardById } = require('../../controllers/ward/ward.controller');

const router = express.Router();

router.post('/add', addWard);
router.get('/fetchAll', getAllWards);
router.get('/ward-detail/:id', getWardById);

module.exports = router;
