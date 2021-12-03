const { StatusCodes } = require('http-status-codes');

const EMAIL_REGISTRED = {
    status: StatusCodes.CONFLICT,
    message: 'Email already registered',
};

const INVALID_ENTRIES = {
    status: StatusCodes.BAD_REQUEST,
    message: 'Invalid entries. Try again.',
};

const INVALID_FIELDS = {
  status: StatusCodes.UNAUTHORIZED,
  message: 'All fields must be filled',
};

const UNAUTHORIZED = {
  status: StatusCodes.UNAUTHORIZED,
  message: 'Incorrect username or password',
};

module.exports = {
  EMAIL_REGISTRED,
  INVALID_ENTRIES,
  INVALID_FIELDS,
  UNAUTHORIZED,
};
