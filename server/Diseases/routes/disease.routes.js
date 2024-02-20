const express = require('express');
const {
  addDisease, getAllDiseases, getDiseaseDetail, editDisease, deleteDisease,
} = require('../controllers/disease.controller');

const router = express.Router();

router.post('/add', addDisease);
router.get('/fetchAll', getAllDiseases);
router.get('/detail/:id', getDiseaseDetail);
router.put('/edit', editDisease);
router.delete('/delete/:id', deleteDisease);

module.exports = router;
