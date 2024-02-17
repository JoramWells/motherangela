const sequelize = require('../db/connect');
const Drugs = require('../models/drugs.model');

const addDrugs = async (req, res, next) => {
  const { drugName } = req.body;
  sequelize.sync().then(() => {
    Drugs.create({
      drugName,
    })
      .then((response) => {
        res.json(response.data);
        next();
      })
      .catch((error) => console.error(error));
  });
};

const getAllDrugs = async (req, res, next) => {
  await sequelize.sync().then(() => {
    Drugs.findAll({ limit: 100 })
      .then((response) => {
        res.json(response);
        next();
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
};

module.exports = { addDrugs, getAllDrugs };
