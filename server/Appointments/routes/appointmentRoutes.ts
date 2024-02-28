import express from "express";
const appointmentController = require('../controllers/appointmentController')


const router = express.Router();

router.post("/add", appointmentController.createAppointment);
router.get("/fetchAll", appointmentController.getAllAppointments);
router.get("/detail/:id", appointmentController.getAllAppointmentsById);
router.get("/detailAll/:id", appointmentController.getAppointmentById);

// router.get("/detail/:id", getVitalDetail);
// router.put("/edit/:id", editVitals);
// router.delete("/delete/:id", deleteVitals);

module.exports = router;
