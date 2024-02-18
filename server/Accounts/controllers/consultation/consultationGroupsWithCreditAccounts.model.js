/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */

const AccountingAccountDetails = require("../../models/_accounts/accountingAccountDetails.model");
const ConsultationGroupsWithCreditAccount = require("../../models/consultation/consultationGroupWithCreditAccount.model");


const addConsultationGroupWithCreditAccounts = async (req, res, next) => {
  try {
    const results = ConsultationGroupsWithCreditAccount.create(req.body);
    res.status(201).json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllConsultationGroupWithCreditAccounts = async (req, res, next) => {
  try {
    const results = await ConsultationGroupsWithCreditAccount.findAll({
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
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getConsultationGroupWithCreditAccounts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await ConsultationGroupsWithCreditAccount.findOne({
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

const editConsultationGroupWithCreditAccounts = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const results = await ConsultationGroupsWithCreditAccount.findOne({
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

const deleteConsultationGroupWithCreditAccounts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await ConsultationGroupsWithCreditAccount.destroy({
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
  addConsultationGroupWithCreditAccounts,
  getAllConsultationGroupWithCreditAccounts,
  getConsultationGroupWithCreditAccounts,
  editConsultationGroupWithCreditAccounts,
  deleteConsultationGroupWithCreditAccounts,
};
