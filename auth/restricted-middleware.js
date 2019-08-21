const jwt = require("jsonwebtoken");
const secrets = require("../secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  // res.status(200).json({ token });
  // check that the token is valid
  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        // token is invalid
        res.status(401).json({ you: "shall not pass!" });
      } else {
        // token is good
        req.user = { username: decodedToken.username };
        next();
      }
    });
  } else {
    res.status(400).json({ message: "nahhh" });
  }
};
