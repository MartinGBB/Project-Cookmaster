const { ObjectId } = require('mongodb');
const updateRecipe = require('../../models/recipes');
const error = require('../../middlewares/errorStatus');

const update = async (data) => {
  const user = ObjectId.isValid(data.userId);
  console.log(user);
  if (!user) return error.MISSING_TOKEN;
  const recipe = await updateRecipe.update(data);
return { status: 200, recipe };
};

module.exports = update;