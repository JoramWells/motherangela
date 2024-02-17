/* eslint-disable import/no-unresolved */
const express = require('express');
const { addProcedureItem, getAllProcedureItem, getProcedureItemById, editProcedureItem, deleteProcedureItem } = require('../controllers/procedureItem.controller');

const router = express.Router();

router.post('/add', addProcedureItem);
router.get('/fetchAll', getAllProcedureItem);
router.get('/detail/:id', getProcedureItemById);
router.put('/edit', editProcedureItem);
router.delete('/delete/:id', deleteProcedureItem);

module.exports = router;
