module.exports = (err, _req, res, _next) => {
  const { message, status } = err;
  if (status) return res.status(status).json({ err: { message } });
  console.log(err);
  return res.status(500).json(message);
};
