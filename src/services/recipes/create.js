const error = require('../../middlewares/errorStatus');
const recipesModel = require('../../models/recipes');

const create = async (name, ingredients, preparation) => {
  if (!name || !ingredients || !preparation) return error.INVALID_ENTRIES;
  const createRecipes = await recipesModel.create(name, ingredients, preparation);
  const recipe = createRecipes.ops[0];
  return { status: 201, recipe };
};

module.exports = create;
