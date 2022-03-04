const express = require('express');
const path = require('path');
const root = require('../controllers/root');
const error = require('../middlewares/error');

const app = express();
app.use(express.json());

app.use('/', root);
app.use(express.static(path.resolve(__dirname, '../uploads')));

app.use(error);

module.exports = app;
