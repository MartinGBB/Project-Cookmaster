const getRecipes = require('../../models/recipes');

module.exports = async () => {
  const getRecipesDB = await getRecipes.find();
  return getRecipesDB;
};
