const verifyRemove = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const remove = await verifyRemove.remove(id);
    res.status(remove.status).send();
  } catch (error) {
    next(error);
  }
};
