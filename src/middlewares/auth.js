const { INVALID_TOKEN, MISSING_TOKEN } = require('./errorStatus');
const authService = require('../services/users/auth');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(MISSING_TOKEN.status).json({ message: MISSING_TOKEN.message });
    }
  const user = authService.verifyToken(authorization);
    if (!user) {
      return res.status(INVALID_TOKEN.status).json({ message: INVALID_TOKEN.message });
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
