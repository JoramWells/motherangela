/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const ProcedureCategory = require('../models/_procedure/procedureCategory.model');
const Procedure_detail = require('../models/_procedure/procedureDetails.model');

const addProcedureDetail = async (req, res, next) => {
  // create user
  try {
    const procedure = await Procedure_detail.create(req.body);
    res.status(201).json(procedure);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllProcedureDetails = async (req, res, next) => {
  try {
    const procedures = await Procedure_detail.findAll({
      include: [
        {
          model: ProcedureCategory,
          attributes: ['category_name'],
        },
      ],
    });
    res.json(procedures);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getProcedureDetailsById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const procedure = await Procedure_detail.findOne({
      where: {
        procedure_id: id,
      },
    });
    res.json(procedure);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const editProcedureDetail = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const procedure = await Procedure_detail.findOne({
      where: {
        id,
      },
    });
    procedure.firstName = firstName;
    return procedure.save();
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteProcedureDetail = async (req, res, next) => {
  const procedureId = req.params.id;

  try {
    const results = await Procedure_detail.destroy({
      where: {
        id: procedureId,
      },
    });

    if (results) {
      return res.status(200).json({ message: 'User deleted successfully' });
    }
    return res.status(404).json({ message: 'User not found.' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  addProcedureDetail,
  getAllProcedureDetails,
  getProcedureDetailsById,
  editProcedureDetail,
  deleteProcedureDetail,
};
