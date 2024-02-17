const express = require('express');
const { getPharmaceuticalItem, editPharmaceuticalItem, getPharmaceuticalItemById } = require('../controllers/pharmaceuticalStore.controller');
const cacheMiddleware = require('../middlewares/cacheMiddleware');

const router = express.Router();

router.get('/fetchAll', cacheMiddleware(60), getPharmaceuticalItem);
router.get('/pharmaceutical-item-detail/:id', getPharmaceuticalItemById);
router.put('/edit-pharmaceutical-item', editPharmaceuticalItem);

module.exports = router;
