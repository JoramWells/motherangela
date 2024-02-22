/* eslint-disable no-plusplus */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const express = require('express');
const cors = require('cors');
const cluster = require('cluster');
const cpus = require('os').cpus().length;

const sequelize = require('./db/connect');
const procedureGroupRoutes = require('./routes/procedureGroup.routes');
const procedureDetailsRoutes = require('./routes/procedureDetails.routes');
const procedureItemsRoutes = require('./routes/procedureItems.routes');
const procedureRoutes = require('./routes/procedure.routes');
const diseaseRoutes = require('./routes/diseases/disease.routes');
const diseaseDuplicatesRoutes = require('./routes/diseases/diseaseDuplicates.routes');
const diseaseMinistryRoutes = require('./routes/diseases/diseaseMinistry.routes');
const internalPharmacyRequestRoutes = require('./routes/internalPharmacyRequest.routes');
const clusterMiddleware = require('./middleware/clusterMiddleware');

const app = express();

const PORT = process.env.PORT || 5011;
const corsOption = {
    origin: ['*'],
};

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        // You may choose to respawn the worker here if necessary
    });
} else {
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

// enable cors
app.use(cors());

app.use('/procedure', procedureRoutes);
app.use('/procedure-group', procedureGroupRoutes);
app.use('/procedure-details', procedureDetailsRoutes);
app.use('/procedure-items', procedureItemsRoutes);

app.use('/disease', diseaseRoutes);
app.use('/disease-ministry', diseaseMinistryRoutes);
app.use('/diseases-duplicates', diseaseDuplicatesRoutes);

app.use('/internal-pharmacy-request', internalPharmacyRequestRoutes);

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
}
