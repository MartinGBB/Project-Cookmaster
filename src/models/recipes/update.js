const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (entity) => {
  const db = await connection();
  const { name, ingredients, preparation, _id } = entity;
  const data = { $set: { name, ingredients, preparation } };

  await db.collection('recipes').updateOne({ _id: ObjectId(_id) }, data);
  return entity;
};
