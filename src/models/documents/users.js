const connection = require('../connection');

const create = async (name, email, password, role) => {
  const db = await connection();
  const result = await db.collection('users').insertOne({ name, email, password, role });
  return result;
};

const find = async (email) => {
  const db = await connection();
  const result = await db.collection('users').find({ email }).toArray();
  return result;
};

module.exports = {
  create,
  find,
};
