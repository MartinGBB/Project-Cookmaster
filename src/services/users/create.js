const { create } = require('../../models/documents/users');
const { find } = require('../../models/documents/users');
const error = require('../../middlewares/errorStatus');
// link: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
const regexEmail = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;

const createUser = async (name, email, password, role) => {
  const existUser = await find(email);
  if (existUser.length > 0) {
    return error.EMAIL_REGISTRED;
  }
  if (!name || !regexEmail.test(email) || !password) {
    return error.INVALID_ENTRIES;
  }
  
  const user = await create(name, email, password, role);
 return { status: 201, message: user.ops[0] };
};

module.exports = createUser;
