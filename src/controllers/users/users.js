const service = require('../../services/users');

module.exports = async (req, res, next) => {
  try {
    const { name = '', email = '', password = '', role = 'user' } = req.body;
    const createUser = await service.create(name, email, password, role);

    const { status, message, user } = createUser; 
    if (!user) {
      return res.status(status).json({ message });
    }
    res.status(status).json({ user });
  } catch (error) {
    next(error);
  }
};
