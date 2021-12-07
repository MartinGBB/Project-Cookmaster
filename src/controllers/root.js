const express = require('express');
const path = require('path');
const login = require('./users/login');
const users = require('./users/router');
const recipes = require('./recipes/router');

// const images = require('./recipesImages/router');

const root = express.Router({ mergeParams: true });

root.use('/users', users);
root.use('/login', login);
root.use('/recipes', recipes);
root.use('/images', express.static(path.resolve(__dirname, '../uploads')));

module.exports = root;
