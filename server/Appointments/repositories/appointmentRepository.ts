const Appointments = require("../models/_appointment/appointments.model");
const Patient_details = require("../models/patient/patients.models");
const Eligibility = require("../models/eligibility/eligibility.model");
const InsuranceDetail = require("../models/insurance/insuranceDetail.model");

class AppointmentRepository {
  async createAppointment(appointmentData: any) {
    return await Appointments.create(appointmentData);
  }

  async getAllAppointments() {
    return await Appointments.findAll({
      order: [["appointment_date", "DESC"]],
      include: [
        {
          model: Patient_details,
          attributes: [
            "first_name",
            "middle_name",
            "last_name",
            "patient_gender",
          ],
        },
        {
          model: Eligibility,
          attributes: ["id"],
        },
      ],
    });
  }

  async getAllAppointmentsById(id: number) {
    return Appointments.findAll({
      where: {
        appointment_id:id,
      },
      include: [
        {
          model: Patient_details,
          attributes: ["first_name", "middle_name"],
        },
        {
          model: InsuranceDetail,
          attributes: ["insurance_name"],
        },
        {
          model: Eligibility,
          attributes: ["id"],
        },
      ],
    });
  }

  async getAppointmentById(id: number) {
    return Appointments.findOne({
      where: {
        appointment_id:id,
      },
      include: [
        {
          model: Patient_details,
          attributes: ["first_name", "middle_name", "dob", "patient_gender"],
        },
      ],
    });
  }
}

module.exports = new AppointmentRepository();
