const removeDb = require('../../models/recipes');

module.exports = async (data) => {
  const remove = await removeDb.remove(data);
  return { status: 204, remove };
};
