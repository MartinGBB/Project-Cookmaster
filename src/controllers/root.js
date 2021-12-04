const express = require('express');
const login = require('./users/login');
const users = require('./users/router');
const recipes = require('./recipes/router');

const root = express.Router({ mergeParams: true });

root.use('/users', users);
root.use('/login', login);
root.use('/recipes', recipes);

module.exports = root;
