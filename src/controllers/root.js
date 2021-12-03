const express = require('express');
const login = require('./users/login');
const users = require('./users/router');

const root = express.Router({ mergeParams: true });

root.use('/users', users);
root.use('/login', login);

module.exports = root;
