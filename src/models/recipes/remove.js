const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (id) => {
  const db = await connection();
  await db.collection('recipes').deleteOne({ _id: ObjectId.isValid(id) });
};
