/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addUserPrivilege, getAllUserPrivileges, getUserPrivilege,
  editUserPrivilege, deleteUserPrivilege,
} = require('../controllers/userPrivilege.controller');

const router = express.Router();

router.post('/add', addUserPrivilege);
router.get('/fetchAll', getAllUserPrivileges);
router.get('/detail/:id', getUserPrivilege);
router.put('/edit', editUserPrivilege);
router.delete('/delete/:id', deleteUserPrivilege);

module.exports = router;
