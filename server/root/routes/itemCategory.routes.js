const express = require('express');

const {
  addItemCategory, getAllItemCategories, getItemCategoryDetail, editItemCategory,
} = require('../controllers/itemCategory.controller');

const router = express.Router();

router.post('/add', addItemCategory);
router.get('/fetchAll', getAllItemCategories);
router.get('/detail/:id', getItemCategoryDetail);
router.put('/edit', editItemCategory);

module.exports = router;
