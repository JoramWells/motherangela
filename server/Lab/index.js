/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const express = require('express');
const cors = require('cors');

const sequelize = require('./db/connect');
const internalLabRequestRoutes = require('./routes/internalLabRequest.routes');
const aLabRoutes = require('./routes/aLab.routes');
const labTestSummarySubSectionRoutes = require('./routes/labTestSummarySubSection.routes');
const specimenTypeRoutes = require('./routes/specimenType.routes');

const app = express();

const PORT = process.env.PORT || 5005;
const corsOption = {
    origin: ['*'],
};


app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

// enable cors
app.use(cors());

app.use('/internal-lab-requests', internalLabRequestRoutes);
app.use('/lab', aLabRoutes);
app.use('/lab-tests-summary-sub-section', labTestSummarySubSectionRoutes);
app.use('/specimen-type', specimenTypeRoutes);

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
