const connection = require('../connection');

module.exports = async (name, ingredients, preparation) => {
  const db = await connection();
  const result = await db.collection('recipes').insertOne({ name, ingredients, preparation });
  return result;
};