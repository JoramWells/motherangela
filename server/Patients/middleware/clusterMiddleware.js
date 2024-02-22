/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
const cluster = require('cluster');
const cpus = require('os').cpus().length;

// check clusters
const clusterMiddleware = (req, res, next) => {
  if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running.`);
    for (let i = 0; i < cpus; i++) {
      cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died`);
    });
    next();
  } else {
    next();
  }
};

module.exports = clusterMiddleware;
