/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const express = require('express');
const cors = require('cors');

const sequelize = require('./db/connect');
const doctorAdmissionBedRoutes = require('./routes/admissionBedAllocation.routes');
const admissionRoutes = require('./routes/admission.routes');
const admissionMaternityServices = require('./routes/admissionMaternityServices.routes');
const admissionMiscellaneousChargesRoutes = require('./routes/admissionMiscellaneousCharge.routes');
const admissionCategoryRoutes = require('./routes/admissionCategory.routes');
const admissionTypeRoutes = require('./routes/admissionType.routes');

const app = express();

const PORT = process.env.PORT || 5009;
const corsOption = {
    origin: ['*'],
};

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

// enable cors
app.use(cors());

app.use('/bed-allocation', doctorAdmissionBedRoutes);
app.use('/admission', admissionRoutes);
app.use('/admission-category', admissionCategoryRoutes);
app.use('/admission-type', admissionTypeRoutes);
app.use('/adm-maternity-services', admissionMaternityServices);
app.use('/adm-miscellaneous-charge', admissionMiscellaneousChargesRoutes);

// app.use((err, req, res, next) => {
//   const errStatus = err.status || 500;
//   const errMessage = err.message || 'Something went wrong';
//   return res.status(errStatus).json(errMessage);
// });

const testConnection = async () => {
    await sequelize.authenticate().then(() => {
        console.log('Connected to database successfully');
    }).catch((error) => {
        console.error('Unable to connect to database: ', error);
    });
};

testConnection();

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
