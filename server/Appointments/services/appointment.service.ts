const appointmentRepository = require('../repositories/appointmentRepository')

class AppointmentService {
  async createAppointment(appointmentData: any) {
    return await appointmentRepository.createAppointment(appointmentData);
  }

  async getAllAppointments() {
    return await appointmentRepository.getAllAppointments();
  }

  async getAllAppointmentsById(id: number) {
    return await appointmentRepository.getAllAppointmentsById(id);
  }

  async getAppointmentById(id: number) {
    return await appointmentRepository.getAppointmentById(id);
  }
}

module.exports = new AppointmentService();