const express = require('express');
const { addUserType, getAllUserTypes, getUserTypeDetail } = require('../controllers/userType.controller');

const router = express.Router();

router.post('/add', addUserType);
router.get('/fetchAll', getAllUserTypes);
router.get('/ward-detail/:id', getUserTypeDetail);

module.exports = router;
