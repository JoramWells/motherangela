/* eslint-disable import/no-unresolved */
const express = require('express');
const {
 addLabTestSummarySubSection, getAllLabTestSummarySubSection,
  getLabTestSummarySubSection, editLabTestSummarySubSection,
  deleteLabTestSummarySubSection,
} = require('../controllers/labTestsSummarySubSection.controller');

const router = express.Router();

router.post('/add', addLabTestSummarySubSection);
router.get('/fetchAll', getAllLabTestSummarySubSection);
router.get('/detail/:id', getLabTestSummarySubSection);
router.put('/edit', editLabTestSummarySubSection);
router.delete('/delete/:id', deleteLabTestSummarySubSection);

module.exports = router;
