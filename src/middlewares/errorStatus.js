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

const INVALID_TOKEN = {
  status: StatusCodes.UNAUTHORIZED,
  message: 'jwt malformed',
};

const NOT_FOUND = {
  status: StatusCodes.NOT_FOUND,
  message: 'recipe not found',
};

const MISSING_TOKEN = {
  status: StatusCodes.UNAUTHORIZED,
  message: 'missing auth token',
};

module.exports = {
  EMAIL_REGISTRED,
  INVALID_ENTRIES,
  INVALID_FIELDS,
  UNAUTHORIZED,
  INVALID_TOKEN,
  NOT_FOUND,
  MISSING_TOKEN,
};
