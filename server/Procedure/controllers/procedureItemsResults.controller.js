/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */

const Procedure_item_result = require('../../models/procedure/procedureItemResults.model');

const addProcedureItemResults = async (req, res, next) => {
  try {
    const results = Procedure_item_result.create(req.body);
    res.status(201).json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllProcedureItemResults = async (req, res, next) => {
  try {
    const results = await Procedure_item_result.findAll({});
    res.json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getProcedureItemResult = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Procedure_item_result.findOne({
      where: {
        admission_id: id,
      },
    });
    res.json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editProcedureItemResult = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const results = await Procedure_item_result.findOne({
      where: {
        id,
      },
    });
    results.firstName = firstName;
    return results.save();
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteProcedureItemResult = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Procedure_item_result.destroy({
      where: {
        admission_id: id,
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
  addProcedureItemResults,
  getAllProcedureItemResults,
  getProcedureItemResult,
  editProcedureItemResult,
  deleteProcedureItemResult,
};
