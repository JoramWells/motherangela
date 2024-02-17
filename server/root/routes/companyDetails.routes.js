/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addCompany, getAllCompanies, getCompanyDetail, editCompany, deleteCompany,
} = require('../controllers/companyDetails.controller');

const router = express.Router();

router.post('/add', addCompany);
router.get('/fetchAll', getAllCompanies);
router.get('/detail/:id', getCompanyDetail);
router.put('/edit', editCompany);
router.delete('/delete/:id', deleteCompany);

module.exports = router;
