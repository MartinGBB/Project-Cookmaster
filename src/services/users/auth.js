const jwt = require('jsonwebtoken');

const API_SECRET = 'mysecret';

const JWT_CONFIG = {
expiresIn: '60m',
algorithm: 'HS256',
};

const getToken = (data) => jwt.sign({ data }, API_SECRET, JWT_CONFIG);

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, API_SECRET);
    const { name } = decoded.data;
    return name;
  } catch (error) {
    return null;
  }
};

module.exports = {
  getToken,
  verifyToken,
};
