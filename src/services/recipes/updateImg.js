// const { ObjectId } = require('mongodb');
const updateRecipe = require('../../models/recipes');
const findRecipe = require('../../models/recipes');
// const error = require('../../middlewares/errorStatus');

const update = async (id, image, userId) => {
  // const { id } = data;
  // const user = ObjectId.isValid(id);
  // if (!user) return error.MISSING_TOKEN;
  const listRecipes = await findRecipe.findById(id);
  const recipe = await updateRecipe.updateImg({ ...listRecipes, image, userId });
return { status: 200, recipe };
};

module.exports = update;