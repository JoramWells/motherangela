const express = require('express');

const {
  addDoctorAdmission, getAllDoctorAdmission, getDoctorAdmissionDetail, editDoctorAdmissionDetail,
} = require('../controllers/admission.controller');

const router = express.Router();

router.post('/add', addDoctorAdmission);
router.get('/fetchAll', getAllDoctorAdmission);
router.get('/detail/:id', getDoctorAdmissionDetail);
router.put('/edit', editDoctorAdmissionDetail);

module.exports = router;
