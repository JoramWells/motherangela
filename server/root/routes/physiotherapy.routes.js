const express = require('express');
const { addPhysioItem, getPhysioItemDetail, getAllPhysioItem } = require('../controllers/physiotherapy.controller');

const router = express.Router();

router.post('/add', addPhysioItem);
router.get('/fetchAll', getAllPhysioItem);
router.get('/physiotherapy-detail/:id', getPhysioItemDetail);

module.exports = router;
