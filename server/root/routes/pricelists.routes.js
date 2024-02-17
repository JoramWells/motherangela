const express = require('express');
const { getAllPriceLists, getPriceListById, editPriceList } = require('../controllers/pricelists.controller');

const router = express.Router();

router.get('/get-all-pricelists', getAllPriceLists);
router.get('/pricelist-detail/:id', getPriceListById);
router.put('/edit-pricelist', editPriceList);

module.exports = router;
