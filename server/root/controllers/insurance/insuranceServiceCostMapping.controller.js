/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

const Insurance_detail = require('../../models/insurance/insurance.model');
const Insurance_service_cost_mapping = require('../../models/insurance/insuranceServiceMapping.model');
// const Service_type = require('../../models/servics/serviceTypes.model');

const addInsuranceServiceCostMapping = async (req, res, next) => {
  try {
    const result = await Insurance_service_cost_mapping.create(req.body);
    res.status(201).json(result);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllInsuranceServiceCostMapping = async (req, res, next) => {
  try {
    const results = await Insurance_service_cost_mapping.findAll({
      include: [
        {
          model: Insurance_detail,
          attributes: ['insurance_name'],
        },
        // {
        //   model: Service_type,
        //   attributes: ['service_type_description'],
        // },
      ],
    });
    res.json(results);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getInsuranceServiceCostMapping = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Insurance_service_cost_mapping.findOne({
      where: {
        insurance_id: id,
      },
    });
    res.json(result);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const editInsuranceServiceCostMapping = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const user = await Insurance_service_cost_mapping.findOne({
      where: {
        id,
      },
    });
    user.firstName = firstName;
    return user.save();
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteInsuranceServiceCostMapping = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Insurance_service_cost_mapping.destroy({
      where: {
        result_id: id,
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
  addInsuranceServiceCostMapping,
  getAllInsuranceServiceCostMapping,
  getInsuranceServiceCostMapping,
  editInsuranceServiceCostMapping,
  deleteInsuranceServiceCostMapping,
};
