const verifyRecipe = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, ingredients, preparation } = req.body;
    const { _id } = req.user;

    const data = { name, ingredients, preparation, _id: id, userId: _id };

    const updateRecipe = await verifyRecipe.update(data);
    const { status, message, recipe } = updateRecipe;

    if (!recipe) return res.status(status).json({ message });
    return res.status(status).json(recipe);
  } catch (error) {
    next(error);
  }
};
