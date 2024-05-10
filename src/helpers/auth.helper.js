const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { JWT_SECRET } = process.env;

const middleware = (req, res, next) => {
  let token = req.headers["authorization"];
  console.log(token);
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  token = token.split(" ")[1] ?? "";
  console.log(token);
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err || !decoded.userId || !decoded.nickname || !decoded.email) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    req.user = decoded;
    next();
  });
};

const genToken = (user) => {
  return jwt.sign(user, JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = {
  middleware,
  genToken,
};
