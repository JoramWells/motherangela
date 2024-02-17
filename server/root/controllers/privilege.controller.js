const sequelize = require('../db/connect');
const PrivilegeCategory = require('../models/privileges.model');

const addPrivilege = async (req, res, next) => {
  const { drugName } = req.body;
  sequelize.sync().then(() => {
    PrivilegeCategory.create({
      drugName,
    })
      .then((response) => {
        res.json(response.data);
        next();
      })
      .catch((error) => console.error(error));
  });
};

const getPrivilege = async (req, res, next) => {
  await sequelize.sync().then(() => {
    PrivilegeCategory.findAll({ limit: 100 })
      .then((response) => {
        res.json(response);
        next();
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
};

module.exports = { addPrivilege, getPrivilege };
