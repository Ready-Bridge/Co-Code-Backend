const authService = require("../services/auth.service");
const { makeValidator } = require("../helpers/request.helper");

const authPing = (req, res, next) => {
  next(authService.authPing());
};

const loginValidator = makeValidator({
  userId: ["string"],
  password: ["string"],
});

const login = async (req, res, next) => {
  let { userId, password } = loginValidator(req.body);
  next(await authService.login(userId, password));
};

const joinValidator = makeValidator({
  userId: ["string"],
  password: ["string"],
  nickname: ["string"],
  email: ["string"],
});

const join = async (req, res, next) => {
  let { userId, password, nickname, email } = joinValidator(req.body);
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
  login,
};
