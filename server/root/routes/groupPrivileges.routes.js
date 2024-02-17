const express = require('express');
const { addGroupPrivilege, getAllGroupPrivilege, getGroupPrivilegeById } = require('../controllers/userPrivilege.controller');

const router = express.Router();

router.post('/add', addGroupPrivilege);
router.get('/fetchAll', getAllGroupPrivilege);
router.get('/group-privilege-detail/:id', getGroupPrivilegeById);

module.exports = router;
