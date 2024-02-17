const express = require('express');

const { addRadiologyRequest, getAllRadiologyRequests, getRadiologyRequestDetail } = require('../controllers/radiology.controller');

const router = express.Router();

router.post('/add', addRadiologyRequest);
router.get('/fetchAll', getAllRadiologyRequests);
router.get('/detail/:id', getRadiologyRequestDetail);
// router.put('/edit', eit);

module.exports = router;
