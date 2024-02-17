const sequelize = require('../db/connect');
const Departments = require('../models/department.model');

const addDepartment = async (req, res, next) => {
  const { departmentName } = req.body;
  sequelize.sync().then(() => {
    Departments.create({
      departmentName,
    })
      .then((response) => {
        res.json(response.data);
        next();
      })
      .catch((error) => console.error(error));
  });
};

const getAllDepartments = async (req, res, next) => {
  await sequelize.sync().then(() => {
    Departments.findAll()
      .then((response) => {
        res.json(response);
        next();
      })
      .catch((error) => {
        console.log(error.message);
      });
  });
};

const getDepartmentById = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Departments.findOne({
      where: {
        id,
      },
    }).then((response) => {
      res.status(200).json(response);
      next();
    }).catch((error) => console.error(error));
  });
};

module.exports = { addDepartment, getAllDepartments, getDepartmentById };
