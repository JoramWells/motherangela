/* eslint-disable import/no-unresolved */
const express = require('express');
const { addConsultationGroupWithCreditAccounts, getAllConsultationGroupWithCreditAccounts, getConsultationGroupWithCreditAccounts, editConsultationGroupWithCreditAccounts, deleteConsultationGroupWithCreditAccounts } = require('../../controllers/consultation/consultationGroupsWithCreditAccounts.model');

const router = express.Router();

router.post('/add', addConsultationGroupWithCreditAccounts);
router.get('/fetchAll', getAllConsultationGroupWithCreditAccounts);
router.get('/detail/:id', getConsultationGroupWithCreditAccounts);
router.put('/edit', editConsultationGroupWithCreditAccounts);
router.delete('/delete/:id', deleteConsultationGroupWithCreditAccounts);

module.exports = router;
