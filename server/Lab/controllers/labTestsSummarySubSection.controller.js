/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */

const Lab_tests_summary_section = require('../models/_lab/labTestsSummarySection.model');
const Lab_tests_summary_sub_section = require('../models/_lab/labTestsSummarySubSection.model');
const Procedure_detail = require('../models/procedure/procedureDetails.model');
const Procedure_item = require('../models/procedure/procedureItems.model');

const addLabTestSummarySubSection = async (req, res, next) => {
  try {
    const results = Lab_tests_summary_sub_section.create(req.body);
    res.status(201).json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllLabTestSummarySubSection = async (req, res, next) => {
  try {
    const results = await Lab_tests_summary_sub_section.findAll({
      include: [
        {
          model: Procedure_detail,
          attributes: ['procedure_name'],
        },
        {
          model: Procedure_item,
          attributes: ['procedure_item_description'],
        },
        {
          model: Lab_tests_summary_section,
          attributes: ['lab_tests_summary_section_description'],
        },
      ],
    });
    res.json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getLabTestSummarySubSection = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Lab_tests_summary_sub_section.findOne({
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

const editLabTestSummarySubSection = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const results = await Lab_tests_summary_sub_section.findOne({
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

const deleteLabTestSummarySubSection = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Lab_tests_summary_sub_section.destroy({
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
  addLabTestSummarySubSection,
  getAllLabTestSummarySubSection,
  getLabTestSummarySubSection,
  editLabTestSummarySubSection,
  deleteLabTestSummarySubSection,
};
