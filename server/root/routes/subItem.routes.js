const express = require('express');
const { addSubItem, getAllSubItems } = require('../controllers/subItem.controller');

const router = express.Router();

router.post('/add', addSubItem);
router.get('/fetchAll', getAllSubItems);

module.exports = router;
