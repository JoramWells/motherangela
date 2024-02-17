/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */

const AccountingAccountDetails = require("../models/_accounts/accountingAccountDetails.model");
const AccountingJournal = require("../models/_accounts/accountingJournal.model");


const addAccountingJournal = async (req, res, next) => {
  try {
    const results = AccountingJournal.create(req.body);
    res.status(201).json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllAccountingJournal = async (req, res, next) => {
  try {
    const results = await AccountingJournal.findAll({
      include:[
        {
          model:AccountingAccountDetails,
          attributes:['account_name']
        }
      ]
    });
    res.json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getAccountingJournal = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await AccountingJournal.findOne({
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

const editAccountingJournal = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const results = await AccountingJournal.findOne({
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

const deleteAccountingJournal = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await AccountingJournal.destroy({
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
  addAccountingJournal,
  getAllAccountingJournal,
  getAccountingJournal,
  editAccountingJournal,
  deleteAccountingJournal,
};
