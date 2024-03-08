"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const express_1 = __importDefault(require("express"));
const redis = require('redis');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const cluster = require('cluster');
const cpus = require('os').cpus().length;
const { promisify } = require(('util'));
const sequelize = require('./db/connect');
const appointmentRoutes = require('./routes/appointmentRoutes');
const vitalsSignsRoutes = require('./routes/vitals.routes');
// const clusterMiddleware = require('./middleware/clusterMiddleware');
const client = redis.createClient('6379', 'redis');
const connectRedis = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
    }
    catch (error) {
        console.log(error);
    }
});
// connectRedis();
// client.on('error', (err) => console.log(err));
// client.on('connect', () => console.log('connected'));
// const redisSet = promisify(client.set).bind(client);
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5002;
const corsOption = {
    origin: ['*'],
};
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(compression());
// enable cors
app.use(cors());
app.use(morgan('dev'));
app.use('/api/appointment', appointmentRoutes);
// app.use('/vital-signs', vitalsSignsRoutes);
// app.use((err, req, res, next) => {
//   const errStatus = err.status || 500;
//   const errMessage = err.message || 'Something went wrong';
//   return res.status(errStatus).json(errMessage);
// });
const testConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelize.authenticate().then(() => {
        console.log('Connected to database successfully');
    }).catch((error) => {
        console.error('Unable to connect to database: ', error);
    });
});
testConnection();
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
