const sequelize = require('../db/connect');
const ItemType = require('../models/itemType.model');

const addItemType = async (req, res, next) => {
  const { itemTypeName } = req.body;
  sequelize.sync().then(() => {
    ItemType.create({
      itemTypeName,
    })
      .then((response) => {
        res.json(response.data);
        next();
      })
      .catch((error) => console.error(error));
  });
};

const getAllItemTypes = async (req, res, next) => {
  await sequelize.sync().then(() => {
    ItemType.findAll()
      .then((response) => {
        res.json(response);
        next();
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
};

module.exports = { addItemType, getAllItemTypes };
