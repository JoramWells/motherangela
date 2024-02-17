/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */

const Accounting_supplier = require('../models/_accounts/accountingSuppliers.model');

const addAccountingSupplier = async (req, res, next) => {
  try {
    const results = Accounting_supplier.create(req.body);
    res.status(201).json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllAccountingSuppliers = async (req, res, next) => {
  try {
    const results = await Accounting_supplier.findAll({});
    res.json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getAccountingSupplierDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Accounting_supplier.findOne({
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

const editAccountingSupplier = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const results = await Accounting_supplier.findOne({
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

const deleteAccountingSupplier = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Accounting_supplier.destroy({
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
  addAccountingSupplier,
  getAllAccountingSuppliers,
  getAccountingSupplierDetail,
  editAccountingSupplier,
  deleteAccountingSupplier,
};
