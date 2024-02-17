/* eslint-disable import/no-unresolved */
const express = require('express');
const {
  addUserPrivilegeDetail, getAllUserPrivilegeDetails, getUserPrivilegeDetail,
  editUserPrivilegeDetail, deleteUserPrivilegeDetail,
} = require('../controllers/userPrivilegeDetails.controller');

const router = express.Router();

router.post('/add', addUserPrivilegeDetail);
router.get('/fetchAll', getAllUserPrivilegeDetails);
router.get('/detail/:id', getUserPrivilegeDetail);
router.put('/edit', editUserPrivilegeDetail);
router.delete('/delete/:id', deleteUserPrivilegeDetail);

module.exports = router;
