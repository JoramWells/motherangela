/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const { Sequelize } = require('sequelize');
const sequelize = require('../db/connect');
const Inpatient_case_types = require('../models/inpatient/inpatientCaseTypes.model');

const addInPatientCaseType = async (req, res, next) => {
  sequelize.sync().then(() => {
    Inpatient_case_types.create(req.body)
      .then((response) => {
        res.json(response.data);
        next();
      })
      .catch((error) => console.error(error));
  });
};

const getAllInPatientCaseType = async (req, res, next) => {
  try {
    await sequelize.sync().then(() => {
      Inpatient_case_types.findAll()
        .then((response) => {
          console.log(response);
          res.status(200).json(response);
          // res.sendStatus(200)
          next();
        })
        .catch((error) => {
          next(error);
          console.log(error);
        });
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// const getAllInPatientCaseType = async (req, res, next) => {
//   try {
//     await sequelize.sync().then(() => {
//       Inpatient_case_types.findAll({
//         limit: 2,
//         include: [
//           {
//             model: Patient_details,
//             as: 'patients',
//           },
//         ],
//       })
//         .then((response) => {
//           console.log(response);
//           res.status(200).json(response);
//           // res.sendStatus(200)
//           next();
//         })
//         .catch((error) => {
//           next(error);
//           console.log(error);
//         });
//     });
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// };

const getInPatientCaseTypeDetail = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Inpatient_case_types.findOne({
      where: {
        admission_id: id,
      },
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));
  });
};

const editInPatientCaseType = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    Inpatient_case_types.findOne({
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

const deleteInPatientCaseType = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Inpatient_case_types.destroy({
      where: {
        admission_id: id,
      },
    }).then((response) => {
      res.sendStatus(200).json(response);
      // console.log(response);
    });
  }).catch((err) => console.log(err));
};

module.exports = {
  addInPatientCaseType,
  getAllInPatientCaseType,
  getInPatientCaseTypeDetail,
  editInPatientCaseType,
  deleteInPatientCaseType,
};
