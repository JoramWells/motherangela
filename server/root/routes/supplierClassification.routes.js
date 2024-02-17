const express = require('express');

const {
  addSupplierClassification, getAllSupplierClassification,
  getSupplierClassificationDetail, editSupplierClassification,
} = require('../controllers/supplierClassification.controller');

const router = express.Router();

router.post('/add', addSupplierClassification);
router.get('/fetchAll', getAllSupplierClassification);
router.get('/detail/:id', getSupplierClassificationDetail);
router.put('/edit', editSupplierClassification);

module.exports = router;
