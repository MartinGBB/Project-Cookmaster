const jwt = require('jsonwebtoken');

const API_SECRET = 'mysecret';

const JWT_CONFIG = {
expiresIn: '15m',
algorithm: 'HS256',
};

const getToken = (data) => jwt.sign(data, API_SECRET, JWT_CONFIG);

module.exports = {
  getToken,
};
