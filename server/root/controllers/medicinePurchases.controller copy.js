/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const Redis = require('redis');
const Medication_stock_take = require('../models/medication/medicationStockTake.model');

// create redis client
const redisClient = Redis.createClient({
  host: '127.0.0.1',
  port: '6379',
});
redisClient.on('error', (error) => {
  console.error(error);
});

const EXPIRATION = 3600;

const addMedicationStockTake = async (req, res, next) => {
  try {
    const result = await Medication_stock_take.create(req.body);
    res.status(201).json(result);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllMedicationStockTake = async (req, res, next) => {
  try {
    redisClient.get('MedicationStockTake', async (err, stocks) => {
      if (err) console.log(err);
      if (stocks != null) {
        return res.json(JSON.parse(stocks));
      }

      // else
      const results = await Medication_stock_take.findAll({});
      redisClient.setEx('MedicationStockTake', EXPIRATION, JSON.stringify(results));
      next();
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
    next(error);
  }
};

const getMedicationStockTakeDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Medication_stock_take.findOne({
      where: {
        result_id: id,
      },
    });
    res.json(result);
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editMedicationStockTake = async (req, res, next) => {
  const { id, firstName } = req.body;
  try {
    const user = await Medication_stock_take.findOne({
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

const deleteMedicationStockTake = async (req, res, next) => {
  try {
    const { id } = req.params;
    const results = await Medication_stock_take.destroy({
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
  addMedicationStockTake,
  getAllMedicationStockTake,
  getMedicationStockTakeDetail,
  editMedicationStockTake,
  deleteMedicationStockTake,
};
