const service = require('../../services/users');

module.exports = async (req, res, next) => {
  try {
    const { name = '', email = '', password = '', role = 'user' } = req.body;
    const createUser = await service.create(name, email, password, role);

    const { message, user } = createUser;
    res.status(createUser.status).json({ message, user });
  } catch (error) {
    next(error);
  }
};
