/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const { Sequelize } = require('sequelize');
const sequelize = require('../db/connect');
const Hospital_store = require('../models/hospitalStores.model');

// Hospital_store.belongsTo(Patient_details, { foreignKey: 'patient_id', as: 'patient_details' });
// Hospital_store.hasMany(Patient_details, { as: 'patients', foreignKey: 'patient_id' });

const addHospitalStore = async (req, res, next) => {
  sequelize.sync().then(() => {
    Hospital_store.create(req.body)
      .then((response) => {
        res.json(response.data);
        next();
      })
      .catch((error) => console.error(error));
  });
};

const getAllHospitalStore = async (req, res, next) => {
  try {
    await sequelize.sync().then(() => {
      Hospital_store.findAll()
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

// const getAllHospitalStore = async (req, res, next) => {
//   try {
//     await sequelize.sync().then(() => {
//       Hospital_store.findAll({
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

const getHospitalStoreDetail = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Hospital_store.findOne({
      where: {
        hospital_id: id,
      },
    }).then((response) => {
      res.json(response);
    }).catch((error) => console.error(error));
  });
};

const editHospitalStore = async (req, res, next) => {
  const { id, serviceName, serviceCategory } = req.body;
  await sequelize.sync().then(() => {
    Hospital_store.findOne({
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

const deleteHospitalStore = async (req, res, next) => {
  const { id } = req.params;
  await sequelize.sync().then(() => {
    Hospital_store.destroy({
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
  addHospitalStore,
  getAllHospitalStore,
  getHospitalStoreDetail,
  editHospitalStore,
  deleteHospitalStore,
};
