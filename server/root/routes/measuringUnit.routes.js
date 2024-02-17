const express = require('express');
const {
  getMeasuringUnitDetail, getAllMeasuringUnits, editMeasuringUnit, addMeasuringUnit,
} = require('../controllers/measuringUnit');

const router = express.Router();

router.post('/add', addMeasuringUnit);
router.get('/fetchAll', getAllMeasuringUnits);
router.get('/detail/:id', getMeasuringUnitDetail);
router.put('/edit', editMeasuringUnit);

module.exports = router;
