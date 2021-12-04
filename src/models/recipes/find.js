const connection = require('../connection');

module.exports = async () => {
  const db = await connection();
  const result = db.collection('recipes').find().toArray();
  return result;
};
