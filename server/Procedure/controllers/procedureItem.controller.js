/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../db/connect');
const Procedure_detail = require('../models/_procedure/procedureDetails.model');
const Procedure_item = require('../models/_procedure/procedureItems.model');

const addProcedureItem = async (req, res, next) => {
  // create user
  try {
    const procedure = await Procedure_item.create(req.body);
    res.status(201).json(procedure);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllProcedureItem = async (req, res, next) => {
  try {
    const procedures = await Procedure_item.findAll({
      order: [['updated_at', 'DESC']],
      include: [
        {
          model: Procedure_detail,
          attributes: ['procedure_name'],
        },
      ],
    });
    res.json(procedures);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getProcedureItemById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const procedure = await Procedure_item.findOne({
      where: {
        procedure_item_id: id,
      },
      include: [
        {
          model: Procedure_detail,
          attributes: ['procedure_id', 'procedure_name'],
        },
      ],
    });
    res.json(procedure);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const editProcedureItem = async (req, res, next) => {
  const { id } = req.params;
  const {
    procedure_id,
    procedure_item_description,
    normal_values,
    normal_values_start,
    normal_values_end,
  } = req.body;
  try {
    const procedure = await Procedure_item.findOne({
      where: {
        procedure_item_id: id,
      },
    });
    procedure.procedure_id = procedure_id;
    procedure.procedure_item_description = procedure_item_description;
    procedure.normal_values = normal_values;
    procedure.normal_values_start = normal_values_start;
    procedure.normal_values_end = normal_values_end;
    procedure.save();
    res.json(procedure);
    next();
  } catch (error) {
    console.log(error);
    next(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteProcedureItem = async (req, res, next) => {
  const procedureId = req.params.id;

  try {
    const results = await Procedure_item.destroy({
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
  addProcedureItem,
  getAllProcedureItem,
  getProcedureItemById,
  editProcedureItem,
  deleteProcedureItem,
};
