/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const express = require('express');
const cors = require('cors');

const sequelize = require('./db/connect');
const accountTypeRoutes = require('./routes/accountType.routes');
const accountingSupplierRoutes = require('./routes/accountingSupplier.routes');
const accountingItemRoutes = require('./routes/accountingItem.routes');
const accountingCostCentre = require('./routes/accountingCostCentre.routes')
const accountingStore = require('./routes/accountingStore.routes')
const accountingDepartment = require('./routes/accountingDepartment.routes')
const accountingJournal = require('./routes/accountingJournal.routes')

const app = express();

const PORT = process.env.PORT || 5010;
const corsOption = {
    origin: ['*'],
};

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

// enable cors
app.use(cors());

app.use('/account-type', accountTypeRoutes);
app.use('/accounting-suppliers', accountingSupplierRoutes);
app.use('/accounting-department', accountingDepartment);
app.use('/accounting-items', accountingItemRoutes);
app.use('/accounting-journal', accountingJournal);
app.use('/cost-centre', accountingCostCentre);
app.use('/stores', accountingStore);

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
