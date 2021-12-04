const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  const db = await connection();
  const result = ObjectId.isValid(id)
  ? (await db.collection('recipes').findOne({ _id: ObjectId(id) })) 
  : null;

  return result;
};
