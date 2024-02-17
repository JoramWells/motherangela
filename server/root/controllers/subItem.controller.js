const sequelize = require('../db/connect');
const SubItem = require('../models/subItem.model');

const addSubItem = async (req, res, next) => {
  const { subItemName } = req.body;
  sequelize.sync().then(() => {
    SubItem.create({
      subItemName,
    })
      .then((response) => {
        res.json(response.data);
        next();
      })
      .catch((error) => console.error(error));
  });
};

const getAllSubItems = async (req, res, next) => {
  await sequelize.sync().then(() => {
    SubItem.findAll()
      .then((response) => {
        res.json(response);
        next();
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
};

module.exports = { addSubItem, getAllSubItems };
