/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const express = require('express');
const cors = require('cors');
const cluster = require('cluster');
const cpus = require('os').cpus().length;

const sequelize = require('./db/connect');
const appointmentRoutes = require('./routes/appointment.routes');
const vitalsSignsRoutes = require('./routes/vitals.routes');
const clusterMiddleware = require('./middleware/clusterMiddleware');

const app = express();

const PORT = process.env.PORT || 5002;
const corsOption = {
    origin: ['*'],
};

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

// enable cors
app.use(cors());

app.use('/appointment', appointmentRoutes);
app.use('/vital-signs', vitalsSignsRoutes);

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
