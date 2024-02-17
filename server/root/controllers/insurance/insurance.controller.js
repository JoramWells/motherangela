/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const sequelize = require('../../db/connect');
const Insurance_detail = require('../../models/insurance/insurance.model');

const addInsurance = async (req, res, next) => {
  const {
    itemName,
    unitMeasurement,
    unitPrice,
    quantity,
    physicalCount,
    variance,
  } = req.body;

  try {
  // create data
    await sequelize
      .sync()
      .then(() => {
        Insurance_detail.create(req.body)
          .then((response) => {
            res.json(response.data);
            next();
          })
          .catch((error) => {
            console.error('Unable to catch error: ', error);
          });
      });
  } catch (error) {
    console.log(error);
  }
};

// get all pricelists
const getAllInsurances = async (req, res, next) => {
  try {
    const insurances = await Insurance_detail.findAll();
    res.json(insurances);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getInsuranceDetail = async (req, res, next) => {
  const { id } = req.params;
  try {
    await sequelize.sync().then(() => {
      Insurance_detail.findOne({
        where: {
          id,
        },
      }).then((response) => {
        res.status(200).json(response);
      }).catch((error) => res.status(404).json(error.message));
    });
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const editInsurance = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    Insurance_detail.findOne({
      where: {
        id,
      },
    })
      .then((response) => {
        response.service_name = serviceName;
        response.service_category = serviceCategory;
        return response.save();
      })
      .catch((error) => console.error(error));
  });
};

module.exports = {
  addInsurance, getAllInsurances, getInsuranceDetail, editInsurance,
};
