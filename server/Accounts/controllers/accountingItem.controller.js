/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */

const Accounting_item = require('../models/_accounts/accountingItems.model');

const addAccountingItem = async (req, res, next) => {
  try {
    const results = Accounting_item.create(req.body);
    res.status(201).json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllAccountingItem = async (req, res, next) => {
  try {
    const results = await Accounting_item.findAll({});
    res.json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getAccountingItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Accounting_item.findOne({
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

const editAccountingItem = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const results = await Accounting_item.findOne({
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

const deleteAccountingItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Accounting_item.destroy({
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
  addAccountingItem,
  getAllAccountingItem,
  getAccountingItem,
  editAccountingItem,
  deleteAccountingItem,
};
