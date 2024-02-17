const express = require('express');

const {
  addSupplier, getAllSupplier, getSupplierDetail, editSupplier, deleteSupplier,
} = require('../controllers/supplier.controller');

const router = express.Router();

router.post('/add', addSupplier);
router.get('/fetchAll', getAllSupplier);
router.get('/detail/:id', getSupplierDetail);
router.put('/edit', editSupplier);
router.delete('/delete/:id', deleteSupplier);

module.exports = router;
