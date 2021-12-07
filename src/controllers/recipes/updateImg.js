const update = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { _id } = req.user;

    const image = `${req.headers.host}/${req.file.path}`;
    const updateRecipe = await update.updateImg(id, image, _id);
    const { status, message, recipe } = updateRecipe;
    if (!recipe) return res.status(status).json({ message });
    res.status(status).json(recipe);
  } catch (error) {
    next(error);
  }
};
