const express = require('express');
const { addDepartment, getAllDepartments, getDepartmentById } = require('../controllers/department.controller');

const router = express.Router();

router.post('/add', addDepartment);
router.get('/fetchAll', getAllDepartments);
router.get('/department-detail/:id', getDepartmentById);

module.exports = router;
