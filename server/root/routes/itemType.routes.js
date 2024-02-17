const express = require('express');
const { addItemType, getAllItemTypes } = require('../controllers/itemType.controller');

const router = express.Router();

router.post('/add', addItemType);
router.get('/fetchAll', getAllItemTypes);

module.exports = router;
