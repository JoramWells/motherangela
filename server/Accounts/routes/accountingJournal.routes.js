/* eslint-disable import/no-unresolved */
const express = require('express');
const { addAccountingJournal, getAllAccountingJournal, getAccountingJournal, editAccountingJournal, deleteAccountingJournal } = require('../controllers/accountingJournals.controllers');

const router = express.Router();

router.post('/add', addAccountingJournal);
router.get('/fetchAll', getAllAccountingJournal);
router.get('/detail/:id', getAccountingJournal);
router.put('/edit', editAccountingJournal);
router.delete('/delete/:id', deleteAccountingJournal);

module.exports = router;
