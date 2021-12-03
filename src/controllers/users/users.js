const service = require('../../services/users');

module.exports = async (req, res, next) => {
  try {
    const { name = '', email = '', password = '', role = 'user' } = req.body;
    const createUser = await service.createUser(name, email, password, role);

    if (createUser.status !== 201) {
      return res.status(createUser.status).json({ message: createUser.message });
    }
    
    const { password: _password, ...user } = createUser.message;
    res.status(createUser.status).json({ user });
  } catch (error) {
    next(error);
  }
};
