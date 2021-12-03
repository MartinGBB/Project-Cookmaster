const user = require('../../models/documents/auth/users');
const error = require('../../middlewares/errorStatus');
const authService = require('./auth');

const login = async (email, password) => {
  if (!email || !password) return error.INVALID_FIELDS;

  const findUser = await user.find(email);
  const [data] = findUser;
  if (!data || password !== data.password) return error.UNAUTHORIZED;

  const { password: _password, ...users } = findUser;
  const token = authService.getToken(users);
  return { status: 200, token };
};

module.exports = login;