/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
const Appointments2 = require('../models/appointments2.models');

class Appointment {
  getAllAppointments = async (req, res, next) => {
    try {
      const results = await Appointments2.findAll({});
      next();
      return res.json(results);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = Appointment;
