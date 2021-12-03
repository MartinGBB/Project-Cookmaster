const { StatusCodes } = require('http-status-codes');

const EMAIL_REGISTRED = {
    status: StatusCodes.CONFLICT,
    message: 'Email already registered',
};

const INVALID_ENTRIES = {
    status: StatusCodes.BAD_REQUEST,
    message: 'Invalid entries. Try again.',
};

module.exports = {
  EMAIL_REGISTRED,
  INVALID_ENTRIES,
};
