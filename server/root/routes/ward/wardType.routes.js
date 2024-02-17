const express = require('express');
const { addWardType, getAllWardTypes, getWardTypeById } = require('../../controllers/ward/wardType.controller');

const router = express.Router();

router.post('/add', addWardType);
router.get('/fetchAll', getAllWardTypes);
router.get('/ward-detail/:id', getWardTypeById);

module.exports = router;
