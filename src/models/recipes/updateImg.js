const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (entity) => {
  const db = await connection();
  const { name, ingredients, preparation, image, _id, userId } = entity;
  const data = { $set: { name, ingredients, preparation, image, userId } };

  await db.collection('recipes').updateOne({ _id: ObjectId(_id) }, data);
  return entity;
};
