const service = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const validRecipe = await service.create(name, ingredients, preparation);
    const { status, message, recipe } = validRecipe;
    if (!recipe) return res.status(status).json({ message });
    res.status(status).json({ recipe });
  } catch (error) {
    next(error);
  }
};
