const error = require('../../middlewares/errorStatus');
const findRecipe = require('../../models/recipes');

module.exports = async (id) => {
  const recipe = await findRecipe.findById(id);
  if (!recipe) return error.NOT_FOUND;
  return { status: 200, recipe };
};
