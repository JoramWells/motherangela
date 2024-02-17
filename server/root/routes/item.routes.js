const express = require('express');

const {
  addItem, getAllItems, getItemDetail, editItemDetail,
} = require('../controllers/item.controller');

const router = express.Router();

router.post('/add', addItem);
router.get('/fetchAll', getAllItems);
router.get('/detail/:id', getItemDetail);
router.put('/edit', editItemDetail);

module.exports = router;
