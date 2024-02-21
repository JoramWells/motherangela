const express = require('express');
const {
  addDiseaseMinistry, getDiseaseMinistryDetail,
  editDiseaseMinistry, deleteDiseaseMinistry, getAllDiseasesMinistry,
} = require('../../controllers/diseaseMinistry.controller');

const router = express.Router();

router.post('/add', addDiseaseMinistry);
router.get('/fetchAll', getAllDiseasesMinistry);
router.get('/detail/:id', getDiseaseMinistryDetail);
router.put('/edit', editDiseaseMinistry);
router.delete('/delete/:id', deleteDiseaseMinistry);

module.exports = router;
