const service = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findService = await service.findById(id);

    const { status, message, recipe } = findService;

    if (!recipe) return res.status(status).json({ message });

    res.status(status).json(recipe);
  } catch (error) {
    next(error);
  }
};
