const express = require('express');
const {
  addVitals, getAllVitals, getVitalDetail, editVitals, deleteVitals,
} = require('../controllers/vitals.controller');

const router = express.Router();

router.post('/add', addVitals);
router.get('/fetchAll', getAllVitals);
router.get('/detail/:id', getVitalDetail);
router.put('/edit/:id', editVitals);
router.delete('/delete/:id', deleteVitals);

module.exports = router;
