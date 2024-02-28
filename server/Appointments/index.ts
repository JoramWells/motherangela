/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import express,{Application} from 'express';
const redis = require('redis');
const cors = require('cors');
const compression = require('compression')
const cluster = require('cluster');
const cpus = require('os').cpus().length;
const { promisify } = require(('util'));
const sequelize = require('./db/connect');
const appointmentRoutes = require('./routes/appointmentRoutes');
const vitalsSignsRoutes = require('./routes/vitals.routes');
// const clusterMiddleware = require('./middleware/clusterMiddleware');

const client = redis.createClient('6379', 'redis');

const connectRedis = async () => {
    try {
        await client.connect();
    } catch (error) {
        console.log(error);
    }
};

// connectRedis();
// client.on('error', (err) => console.log(err));
// client.on('connect', () => console.log('connected'));
// const redisSet = promisify(client.set).bind(client);

const app:Application = express();

const PORT = process.env.PORT || 5002;
const corsOption = {
    origin: ['*'],
};


app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(compression())
// enable cors
app.use(cors());

app.use('/api/appointment', appointmentRoutes);
// app.use('/vital-signs', vitalsSignsRoutes);

// app.use((err, req, res, next) => {
//   const errStatus = err.status || 500;
//   const errMessage = err.message || 'Something went wrong';
//   return res.status(errStatus).json(errMessage);
// });

const testConnection = async () => {
    await sequelize.authenticate().then(() => {
        console.log('Connected to database successfully');
    }).catch((error: Error) => {
        console.error('Unable to connect to database: ', error);
    });
};

testConnection();

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
