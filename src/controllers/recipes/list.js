const service = require('../../services/recipes');

module.exports = async (req, res, next) => {
  try {
    const findRecipes = await service.find();

    res.status(200).json(findRecipes);
  } catch (error) {
    next(error);
  }
};
