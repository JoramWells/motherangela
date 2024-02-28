import { NextFunction, Request, Response } from "express"

const appointmentService = require('../services/appointment.service')

class AppointmentController {
  async createAppointment(req: Request, res: Response, next: NextFunction) {
    try {
      const results = await appointmentService.createAppointment(req.body);
      res.json(results);
      next();
    } catch (error) {
      next(error);
    }
  }

  async getAllAppointments(req: Request, res: Response, next: NextFunction) {
    try {
      const results = await appointmentService.getAllAppointments();
      res.status(200).json(results);
      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async getAllAppointmentsById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    try {
      const results = await appointmentService.getAllAppointmentsById(id);
      res.status(200).json(results);
      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  async getAppointmentById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    try {
      const results = await appointmentService.getAppointmentById(id);
      res.status(200).json(results);
      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = new AppointmentController()