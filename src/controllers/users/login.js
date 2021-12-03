const service = require('../../services/users');

module.exports = async (req, res, next) => {
 try {
   const { email = '', password = '' } = req.body;
   const findUserServer = await service.login(email, password);
   const { status, message, token } = findUserServer;

   res.status(status).json({ message, token });
 } catch (error) {
   next(error);
 }
};