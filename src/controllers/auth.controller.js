const authService = require("../services/auth.service");

const authPing = (req, res, next) => {
  next(authService.authPing());
};

module.exports = {
  authPing,
};
