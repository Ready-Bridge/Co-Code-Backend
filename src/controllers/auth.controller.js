const authService = require("../services/auth.service");

const authPing = (req, res, next) => {
  next(authService.authPing());
};

const join = async (req, res, next) => {
  let { userId, password, nickname, email } = req.body;
  next(await authService.join(userId, password, nickname, email));
};

const code = async (req, res, next) => {
  let { email } = req.body;
  next(await authService.code(email));
};

module.exports = {
  authPing,
  join,
  code,
};
