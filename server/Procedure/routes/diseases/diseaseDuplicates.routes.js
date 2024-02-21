const express = require('express');
const {
  addDiseasesDuplicates, getDiseasesDuplicatesDetail,
  editDiseasesDuplicates, deleteDiseasesDuplicates, getAllDiseasesDuplicates,
} = require('../../controllers/diseasesDuplicates.controller');

const router = express.Router();

router.post('/add', addDiseasesDuplicates);
router.get('/fetchAll', getAllDiseasesDuplicates);
router.get('/detail/:id', getDiseasesDuplicatesDetail);
router.put('/edit', editDiseasesDuplicates);
router.delete('/delete/:id', deleteDiseasesDuplicates);

module.exports = router;
