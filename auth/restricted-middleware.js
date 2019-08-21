module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  res.status(200).json({ token });
};
